import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'CEO of InnovateX',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    review: 'ManTash Innovations transformed our legacy systems into a modern AI-driven powerhouse. Incredible team!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ahmed Khan',
    company: 'Product Manager at TechGen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    review: 'The best React Native developers we have ever worked with. Fast, reliable, and visionary.',
    rating: 5,
  },
  {
    id: 3,
    name: 'John Davis',
    company: 'Tech Lead at StartupHub',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    review: 'Their FastAPI and Firebase integration saved us months of development time. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Chen',
    company: 'CTO of FinTech Pro',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    review: 'Outstanding AI/ML solutions that increased our efficiency by 300%. True innovation partners!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Michael Rodriguez',
    company: 'Founder of CloudScale',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    review: 'Their web scraping automation revolutionized our data pipeline. Exceptional quality!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    company: 'Director at Digital Ventures',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    review: 'Professional, innovative, and always delivering beyond expectations. Our go-to tech partner!',
    rating: 5,
  },
];

export function TestimonialsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A855F7]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7]">Clients</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-xl"
          >
            Trusted by industry leaders worldwide
          </motion.p>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0E14] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0E14] to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* First Set */}
              {testimonials.map((testimonial) => (
                <TestimonialCard key={`first-${testimonial.id}`} testimonial={testimonial} isPaused={isPaused} />
              ))}
              {/* Duplicate Set for seamless loop */}
              {testimonials.map((testimonial) => (
                <TestimonialCard key={`second-${testimonial.id}`} testimonial={testimonial} isPaused={isPaused} />
              ))}
              {/* Third Set for extra smooth scrolling */}
              {testimonials.map((testimonial) => (
                <TestimonialCard key={`third-${testimonial.id}`} testimonial={testimonial} isPaused={isPaused} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    company: string;
    avatar: string;
    review: string;
    rating: number;
  };
  isPaused: boolean;
}

function TestimonialCard({ testimonial, isPaused }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="min-w-[400px] p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-transparent hover:border-[#A855F7]/50 transition-all duration-500 relative group"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(168, 85, 247, 0.05))',
      }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00E5FF] to-[#A855F7] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

      <div className="relative z-10">
        {/* Header: Avatar + Name + Company */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00E5FF]/30 group-hover:border-[#00E5FF] transition-all">
            <ImageWithFallback
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
            <p className="text-[#00E5FF] text-sm">{testimonial.company}</p>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-gray-300 text-base leading-relaxed mb-4 line-clamp-2">
          "{testimonial.review}"
        </p>

        {/* 5 Star Rating */}
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#00E5FF] text-[#00E5FF]"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(0, 229, 255, 0.6))',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
