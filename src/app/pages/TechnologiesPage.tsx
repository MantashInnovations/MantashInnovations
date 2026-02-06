import { motion } from 'motion/react';
import { useState } from 'react';
import { Code2, Sparkles, ArrowRight } from 'lucide-react';

const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code2,
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'React Native', 'Flutter'],
    color: 'from-[#00E5FF] to-[#00E5FF]',
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Code2,
    technologies: ['Node.js', 'FastAPI', 'Firebase'],
    color: 'from-[#00E5FF] to-[#00E5FF]',
  },
  {
    id: 'database',
    title: 'Database & Storage',
    icon: Code2,
    technologies: ['MongoDB', 'Firebase', 'PostgreSQL', 'Redis'],
    color: 'from-[#00E5FF] to-[#00E5FF]',
  },
  {
    id: 'ai-ml',
    title: 'AI/ML',
    icon: Code2,
    technologies: ['TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'LangGraph'],
    color: 'from-[#00E5FF] to-[#00E5FF]',
  },
  {
    id: 'web-scraping',
    title: 'Web Scraping & Automation',
    icon: Code2,
    technologies: ['Beautiful Soup', 'Selenium', 'Scrapy', 'Puppeteer'],
    color: 'from-[#00E5FF] to-[#00E5FF]',
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: Code2,
    technologies: ['Flutter', 'React Native', 'iOS', 'Android', 'Dart'],
    color: 'from-[#00E5FF] to-[#00E5FF]',
  },
];

export function TechnologiesPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="pt-16 min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
      {/* Nebula-style background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF] animate-gradient">Technologies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Empowering Innovation with Cutting-Edge Technology Stack
          </motion.p>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCard === category.id;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  onHoverStart={() => setActiveCard(category.id)}
                  onHoverEnd={() => setActiveCard(null)}
                  className="relative group cursor-pointer"
                >
                  {/* Glassmorphism Card */}
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl
                      bg-white/5 backdrop-blur-xl
                      border transition-all duration-500
                      ${isActive 
                        ? 'border-transparent shadow-2xl shadow-blue-500/30' 
                        : 'border-[#1E293B] hover:border-[#1E293B]/50'
                      }
                    `}
                    style={{
                      minHeight: isActive ? '400px' : '280px',
                    }}
                  >
                    {/* Gradient Border Glow on Hover */}
                    {isActive && (
                      <motion.div
                        layoutId={`glow-${category.id}`}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-20 blur-xl`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                    {/* Gradient Border */}
                    {isActive && (
                      <div 
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-50`}
                        style={{ 
                          padding: '2px',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />
                    )}

                    {/* Card Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          rotate: isActive ? 5 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="mb-6"
                      >
                        <div className={`
                          w-16 h-16 rounded-xl flex items-center justify-center
                          bg-gradient-to-br ${category.color}
                          shadow-lg
                          ${isActive ? 'shadow-blue-500/50' : 'shadow-blue-500/20'}
                        `}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-4 font-['Montserrat']">
                        {category.title}
                      </h3>

                      {/* Technologies List - Shown on Hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          height: isActive ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-blue-500/30 space-y-3">
                          {category.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: isActive ? 1 : 0,
                                x: isActive ? 0 : -20,
                              }}
                              transition={{
                                delay: isActive ? techIndex * 0.1 : 0,
                                duration: 0.3,
                              }}
                              className="flex items-center gap-3"
                            >
                              {/* Blue Bullet Point */}
                              <div className="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50" />
                              <span className="text-gray-300 text-lg font-medium">
                                {tech}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Hover Prompt - Hidden when Active */}
                      {!isActive && (
                        <motion.p
                          initial={{ opacity: 1 }}
                          animate={{ opacity: isActive ? 0 : 1 }}
                          className="mt-auto text-sm text-gray-500 flex items-center gap-2"
                        >
                          <Sparkles className="w-4 h-4 text-blue-400" />
                          Hover to explore
                        </motion.p>
                      )}
                    </div>

                    {/* Floating Particles Effect on Hover */}
                    {isActive && (
                      <>
                        <motion.div
                          className="absolute top-10 right-10 w-2 h-2 rounded-full bg-blue-400"
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                        <motion.div
                          className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-slate-300"
                          animate={{
                            y: [0, 30, 0],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-slate-500/10 backdrop-blur-xl border border-blue-500/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Amazing?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's leverage these cutting-edge technologies to bring your vision to life
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
