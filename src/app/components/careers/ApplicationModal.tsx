import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Check, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  positionTitle: string;
}

interface ApplicationFormValues {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  cv: FileList;
}

export function ApplicationModal({ isOpen, onClose, positionTitle }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<ApplicationFormValues>();
  const cvFiles = watch('cv');

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('coverLetter', data.coverLetter);
      formData.append('position', positionTitle);
      
      if (data.cv[0]) {
        formData.append('cv', data.cv[0]);
      }

      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-3dd47968/apply`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: formData
      });

      // Handle response safely to avoid "Unexpected end of input"
      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.error('Non-JSON response:', responseText);
        throw new Error('Server returned an invalid response. Please try again.');
      }

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      console.log('Application Submitted:', result);

      toast.success('Application received!', {
        description: `We have received your application for ${positionTitle}. A confirmation email has been sent to ${data.email}.`
      });
      
      reset();
      onClose();
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Submission failed', {
        description: error instanceof Error ? error.message : 'Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4"
          >
            <div className="bg-[#0B0E14] border border-[#00E5FF]/20 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#00E5FF]/5">
                <div>
                  <h3 className="text-xl font-bold text-white">Apply for Role</h3>
                  <p className="text-[#00E5FF] text-sm">{positionTitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors"
                      placeholder="+92 300 1234567"
                    />
                    {errors.phone && <span className="text-red-400 text-xs">{errors.phone.message}</span>}
                  </div>

                  {/* CV Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Resume/CV</label>
                    <div className="relative">
                      <input
                        type="file"
                        {...register('cv', { required: 'Please upload your CV' })}
                        className="hidden"
                        id="cv-upload"
                        accept=".pdf,.doc,.docx"
                      />
                      <label
                        htmlFor="cv-upload"
                        className={`flex flex-col items-center justify-center gap-2 w-full bg-white/5 border border-dashed ${errors.cv ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-8 text-gray-400 cursor-pointer hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5 transition-all`}
                      >
                        {cvFiles && cvFiles.length > 0 ? (
                          <>
                            <Check className="w-8 h-8 text-[#00E5FF] mb-2" />
                            <span className="text-white font-medium text-center break-all">{cvFiles[0].name}</span>
                            <span className="text-xs text-[#00E5FF]">Click to change</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-5 h-5" />
                            <span>Click to upload CV (PDF, DOC)</span>
                          </>
                        )}
                      </label>
                    </div>
                    {errors.cv && <span className="text-red-400 text-xs">{errors.cv.message}</span>}
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Cover Letter (Optional)</label>
                    <textarea
                      {...register('coverLetter')}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
                      placeholder="Tell us why you're a great fit..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#00E5FF] to-[#00C2FF] text-[#0B0E14] font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Check className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting, you agree to our privacy policy. Your data is secure.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
