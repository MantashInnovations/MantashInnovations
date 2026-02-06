import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    company: 'RetailMax Inc.',
    position: 'CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    text: 'ManTash Innovations transformed our online presence. The platform they built exceeded all our expectations and delivered incredible ROI. Their team is professional, responsive, and truly understands business needs.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    company: 'MediCare Solutions',
    position: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    text: 'The healthcare app has revolutionized how we deliver services. Patients love the convenience and our efficiency has improved significantly. Outstanding work from start to finish.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    company: 'ServiceHub Corp',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    text: 'The AI solution has transformed our customer service. We can now serve more customers better while reducing costs significantly. The ROI has been phenomenal.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Williams',
    company: 'InvestPro',
    position: 'Head of Trading',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    text: 'The dashboard gives our traders a competitive edge with instant insights and lightning-fast performance. Best investment we have made in technology.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Emma Davis',
    company: 'ArtChain',
    position: 'Founder',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    text: 'ManTash Innovations made our vision of a fair NFT marketplace a reality. The platform is secure, fast, and user-friendly. Their blockchain expertise is unmatched.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Robert Taylor',
    company: 'TechStart Inc.',
    position: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    text: 'Working with ManTash Innovations was an absolute pleasure. They delivered on time, on budget, and exceeded our expectations. Highly recommended!',
    rating: 5,
  },
  {
    id: 7,
    name: 'Jennifer Lee',
    company: 'Fashion Forward',
    position: 'E-Commerce Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    text: 'Our new e-commerce platform is beautiful and performs flawlessly. Sales have tripled since launch. Thank you ManTash Innovations!',
    rating: 5,
  },
  {
    id: 8,
    name: 'Thomas Anderson',
    company: 'Global Logistics',
    position: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    text: 'The custom logistics platform has streamlined our operations dramatically. Real-time tracking and analytics have been game-changers for us.',
    rating: 5,
  },
];

export function TestimonialsPage() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Client <span className="text-primary">Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear what our clients have to say
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <Quote className="w-10 h-10 text-primary mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6">{testimonial.text}</p>

                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
