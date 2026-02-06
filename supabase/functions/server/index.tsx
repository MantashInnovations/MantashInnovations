import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { Buffer } from "node:buffer";
// We are bypassing kv_store.tsx because it points to the wrong table.
// import * as kv from "./kv_store.tsx"; 
import { createClient } from "npm:@supabase/supabase-js@2";
import nodemailer from "npm:nodemailer@6.9.13";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-3dd47968/health", (c) => {
  return c.json({ status: "ok" });
});

app.post("/make-server-3dd47968/apply", async (c) => {
  try {
    const formData = await c.req.parseBody();
    const name = formData['name'] as string;
    const email = formData['email'] as string;
    const phone = formData['phone'] as string;
    const position = formData['position'] as string;
    const coverLetter = formData['coverLetter'] as string;
    const cvFile = formData['cv'] as File;

    if (!cvFile || !name || !email) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Initialize Supabase Admin Client
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Supabase credentials missing");
      return c.json({ error: "Server configuration error" }, 500);
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Upload CV to Storage
    const bucketName = "make-3dd47968-applications";
    
    // Check if bucket exists, create if not
    const { data: buckets, error: listBucketsError } = await supabase.storage.listBuckets();
    
    if (listBucketsError) {
      console.error("List Buckets Error:", listBucketsError);
      return c.json({ error: "Failed to access storage" }, 500);
    }

    if (!buckets?.find(b => b.name === bucketName)) {
      const { error: createBucketError } = await supabase.storage.createBucket(bucketName, {
        public: false,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      });
      
      if (createBucketError) {
        console.error("Create Bucket Error:", createBucketError);
        return c.json({ error: "Failed to create storage bucket" }, 500);
      }
    }

    const timestamp = Date.now();
    const cleanFileName = cvFile.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const filePath = `${timestamp}_${cleanFileName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, cvFile, {
        contentType: cvFile.type,
        upsert: false
      });

    if (uploadError) {
      console.error("Upload Error:", uploadError);
      return c.json({ error: "Failed to upload CV" }, 500);
    }

    // Generate signed URL (valid for 7 days)
    const { data: signedUrlData } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(filePath, 604800);

    const cvUrl = signedUrlData?.signedUrl;

    // 2. Store Application Data
    const applicationId = crypto.randomUUID();
    const applicationData = {
      id: applicationId,
      name,
      email,
      phone,
      position,
      coverLetter,
      cvPath: filePath,
      cvUrl,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    // Store in KV manually (bypassing kv_store.tsx due to table name mismatch)
    // The instructions state the table name is kv_store_3dd47968
    const { error: dbError } = await supabase.from("kv_store_3dd47968").upsert({
      key: `application:${applicationId}`,
      value: applicationData
    });

    if (dbError) {
      console.error("Database Error:", dbError);
      return c.json({ error: "Failed to save application data" }, 500);
    }

    // 3. Send Email
    try {
      const cvArrayBuffer = await cvFile.arrayBuffer();
      const cvBuffer = Buffer.from(cvArrayBuffer);

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'tabishrajpoot1111@gmail.com',
          pass: 'dcqrgcvqwjbzvpjq'
        }
      });

      const mailOptions = {
        from: 'tabishrajpoot1111@gmail.com',
        to: 'tabishrajpoot1111@gmail.com', // Sending to self as requested
        subject: `New Application: ${position} - ${name}`,
        text: `
New Job Application Received

Position: ${position}
Name: ${name}
Email: ${email}
Phone: ${phone}

Cover Letter:
${coverLetter}

CV URL: ${cvUrl}

Time: ${new Date().toLocaleString()}
        `,
        html: `
<h2>New Job Application Received</h2>
<p><strong>Position:</strong> ${position}</p>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<hr/>
<h3>Cover Letter:</h3>
<p>${coverLetter ? coverLetter.replace(/\n/g, '<br>') : 'No cover letter provided.'}</p>
<hr/>
<p><a href="${cvUrl}">Download CV Link</a></p>
<p><small>Received at ${new Date().toLocaleString()}</small></p>
        `,
        attachments: [
          {
            filename: cvFile.name,
            content: cvBuffer
          }
        ]
      };

      await transporter.sendMail(mailOptions);
      console.log(`Email sent for application ${applicationId}`);

    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      throw new Error(`Email sending failed: ${emailError instanceof Error ? emailError.message : String(emailError)}`);
    }

    return c.json({ 
      success: true, 
      message: "Application submitted successfully",
      id: applicationId
    });

  } catch (err) {
    console.error("Application processing error:", err);
    return c.json({ error: "Internal Server Error: " + (err instanceof Error ? err.message : String(err)) }, 500);
  }
});

Deno.serve(app.fetch);
