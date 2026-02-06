import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '@/app/data/services';

export function ServicesPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive technology solutions to transform your business and drive growth
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted/50 backdrop-blur-sm text-xs rounded-full border border-border/50 hover:border-primary/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 3 && (
                            <span className="px-3 py-1 bg-muted/50 backdrop-blur-sm text-xs rounded-full border border-border/50">
                              +{service.technologies.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all font-medium">
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Let's discuss your project and how we can help you achieve your goals
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all backdrop-blur-sm"
            >
              View Our Portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
