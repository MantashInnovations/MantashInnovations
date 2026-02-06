import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Target, Users, Lightbulb, Award, Zap, Shield } from 'lucide-react';
import { TestimonialsMarquee } from '@/app/components/TestimonialsMarquee';
import { PartnersSection } from '@/app/components/PartnersSection';
import { CountUpAnimation } from '@/app/components/CountUpAnimation';
import { services } from '@/app/data/services';

export function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Building the future of technology</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transform Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                With Innovation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We build award-winning software solutions that help businesses scale, innovate, and succeed in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
              >
                View Our Work
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              <div>
                <CountUpAnimation
                  end={200}
                  duration={2.5}
                  suffix="+"
                  className="text-4xl font-bold text-primary"
                />
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <CountUpAnimation
                  end={150}
                  duration={2.5}
                  suffix="+"
                  className="text-4xl font-bold text-primary"
                />
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <CountUpAnimation
                  end={98}
                  duration={2.5}
                  suffix="%"
                  className="text-4xl font-bold text-primary"
                />
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive solutions for your digital transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <Link to={`/services/${service.slug}`}>
                    <div className="h-full p-8 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                      {/* Glassmorphism background effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-8 h-8 text-primary" strokeWidth={2} />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Glow effect on hover */}
                      <div
                        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity pointer-events-none"
                        style={{ background: service.color }}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">ManTash Innovations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expertise, innovation, and client-centricity to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Expertise',
                description: 'Years of experience in delivering cutting-edge solutions across various industries',
                gradient: 'from-primary/20 to-primary/5',
                iconColor: 'text-primary',
                glowColor: 'shadow-[0_0_30px_rgba(0,240,255,0.3)]'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Leveraging the latest technologies and methodologies to stay ahead of the curve',
                gradient: 'from-secondary/20 to-secondary/5',
                iconColor: 'text-secondary',
                glowColor: 'shadow-[0_0_30px_rgba(124,58,237,0.3)]'
              },
              {
                icon: Users,
                title: 'Client-Centricity',
                description: 'Your success is our priority. We build lasting partnerships through transparency',
                gradient: 'from-primary/20 to-primary/5',
                iconColor: 'text-primary',
                glowColor: 'shadow-[0_0_30px_rgba(0,240,255,0.3)]'
              },
              {
                icon: Shield,
                title: 'Reliability',
                description: 'Trusted by 150+ clients worldwide for delivering secure and scalable solutions',
                gradient: 'from-secondary/20 to-secondary/5',
                iconColor: 'text-secondary',
                glowColor: 'shadow-[0_0_30px_rgba(124,58,237,0.3)]'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`relative p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 group-hover:${feature.glowColor}`}>
                  {/* Glassmorphism Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-300 ${feature.glowColor}`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 group-hover:${feature.iconColor} transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Corner Elements */}
                  <div className={`absolute top-3 right-3 w-2 h-2 rounded-full ${feature.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`absolute bottom-3 left-3 w-2 h-2 rounded-full ${feature.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials - Horizontal Infinite Scrolling */}
      <TestimonialsMarquee />

      {/* Trusted Partners & Companies */}
      <PartnersSection />

      {/* Ready to Start Your Project - CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Mesh Gradient Background with Starry Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={`cta-star-${i}`}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-semibold">Let's Build Something Amazing</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">Scale?</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Transform your vision into reality with our award-winning development team. Let's create something extraordinary together.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] text-lg font-bold"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>
    </div>
  );
}
