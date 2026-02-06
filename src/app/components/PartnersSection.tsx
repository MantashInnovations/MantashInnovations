import { motion } from "motion/react";
import { CountUpAnimation } from "@/app/components/CountUpAnimation";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const partners = [
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Adobe_Acrobat_v8.0_icon.svg",
  },
];

export function PartnersSection() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "#0A0F1E" }}
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00E5FF]/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A855F7]/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7]">
              Industry Leaders
            </span>
          </h3>
          <p className="text-gray-400 text-lg">
            Powering innovation for world-class companies
          </p>
        </motion.div>

        {/* Infinite Scrolling Partner Logos */}
        <div className="relative">
          {/* Gradient Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0F1E] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0F1E] to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -1440],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First Set */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="min-w-[180px] h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter brightness-200"
                  />
                </div>
              ))}
              {/* Duplicate Set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="min-w-[180px] h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter brightness-200"
                  />
                </div>
              ))}
              {/* Third Set */}
              {partners.map((partner, index) => (
                <div
                  key={`third-${index}`}
                  className="min-w-[180px] h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter brightness-200"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Below Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <CountUpAnimation
              end={500}
              duration={2.5}
              suffix="+"
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7] mb-2"
            />
            <div className="text-gray-400 text-sm">
              Global Clients
            </div>
          </div>
          <div className="text-center">
            <CountUpAnimation
              end={50}
              duration={2.5}
              suffix="+"
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7] mb-2"
            />
            <div className="text-gray-400 text-sm">
              Countries Served
            </div>
          </div>
          <div className="text-center">
            <CountUpAnimation
              end={15}
              duration={2.5}
              suffix="+"
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7] mb-2"
            />
            <div className="text-gray-400 text-sm">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <CountUpAnimation
              end={100}
              duration={2.5}
              suffix="%"
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7] mb-2"
            />
            <div className="text-gray-400 text-sm">
              Client Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}