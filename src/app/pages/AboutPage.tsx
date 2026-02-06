import { motion } from 'motion/react';
import { Linkedin, Users, Target, Rocket, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const tabishImage = 'src/assets/tabishImg.png';
const manahilImage = 'src/assets/manahilImg.png';
const intizanImage = 'src/assets/intizanImg.png';
const zahabImage = 'src/assets/zahabImg.png';
const salmanImage = 'src/assets/salmanImg.png';

export function AboutPage() {
  return (
    <div className="pt-16 min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00E5FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF] animate-gradient">ManTash Innovations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              Building the Future with Award-Winning Digital Solutions
            </motion.p>
          </div>
        </section>

        {/* Founder Section - Tabish Arshad */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-80 h-80 mx-auto">
                  {/* Pulsating Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00E5FF] opacity-30 blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Hexagonal Frame */}
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#00E5FF] to-[#00E5FF] p-1">
                    <div className="w-full h-full rounded-full bg-[#0B0E14] flex items-center justify-center overflow-hidden">
                      <ImageWithFallback
                        src={tabishImage}
                        alt="Tabish Arshad - Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">Mind Behind</span>
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#00E5FF] mb-2">Tabish Arshad</h3>
                  <p className="text-gray-500 text-lg mb-4">Founder</p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Welcome to ManTash Innovations. With a passion for building scalable digital solutions I founded this company to bridge the gap between complex technology and business growth. From AI-driven automation to seamless web experiences my goal is to lead a team that transforms your vision into reality. Let's build the future together.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center hover:bg-[#00E5FF]/20 transition-all shadow-lg shadow-[#00E5FF]/20"
                  >
                    <Linkedin className="w-6 h-6 text-[#00E5FF]" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CEO Section - Manahil Fatima */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Right: Content (reversed order for visual variety) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:order-1"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">CEO</span>
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#00E5FF] mb-2">Manahil Fatima</h3>
                  <p className="text-gray-500 text-lg mb-4">Chief Executive Officer</p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  At ManTash Innovations I lead with a vision to create technology that empowers businesses to reach unprecedented heights. My focus is on innovation client satisfaction and building a culture of excellence. Together with our talented team we deliver solutions that don't just meet expectations they exceed them. Your success is our mission.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center hover:bg-[#00E5FF]/20 transition-all shadow-lg shadow-[#00E5FF]/20"
                  >
                    <Linkedin className="w-6 h-6 text-[#00E5FF]" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Left: Photo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative lg:order-2"
              >
                <div className="relative w-80 h-80 mx-auto">
                  {/* Pulsating Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00E5FF] opacity-30 blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                  
                  {/* Circular Frame */}
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#00E5FF] to-[#00E5FF] p-1">
                    <div className="w-full h-full rounded-full bg-[#0B0E14] flex items-center justify-center overflow-hidden">
                      <ImageWithFallback
                        src={manahilImage}
                        alt="Manahil Fatima - CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">Story</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
                ManTash Innovations was born from a simple belief technology should empower not complicate. We started as a small team of passionate developers and designers united by a vision to create digital solutions that truly make a difference. Today we're proud to be an award-winning agency trusted by businesses worldwide to transform their digital presence.
              </p>
            </motion.div>

            {/* Company Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  description: 'To deliver innovative scalable and user-centric digital solutions that drive real business growth and exceed client expectations.',
                  color: '#00E5FF',
                },
                {
                  icon: Rocket,
                  title: 'Our Vision',
                  description: 'To be the global leader in digital innovation setting new standards for excellence in web development AI integration and user experience.',
                  color: '#00E5FF',
                },
                {
                  icon: Award,
                  title: 'Our Values',
                  description: 'Innovation integrity excellence and client success. We believe in transparent communication continuous learning and delivering beyond promises.',
                  color: '#00E5FF',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    whileHover={{ y: -10 }}
                    className="relative group"
                  >
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all h-full">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                          border: `1px solid ${item.color}30`,
                          boxShadow: `0 0 20px ${item.color}20`,
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">Team</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                A diverse group of talented individuals working together to create exceptional digital experiences
              </p>
            </motion.div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Tabish Arshad', role: 'AI Specialist', image: tabishImage },
                { name: 'Manahil Fatima', role: 'UI/UX Designer', image: manahilImage },
                { name: 'Intizan Nadeem', role: 'Lead Wordpress Developer', image: intizanImage },
                { name: 'Zahab Rasheed', role: 'Lead DevOps Engineer', image: zahabImage },
                { name: 'Salman Bakhtiar', role: 'Lead Application Developer', image: salmanImage },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glassmorphism Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00E5FF]/50 transition-all duration-500">
                    {/* Cyan Glow on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#00E5FF] opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-500"
                    />

                    {/* Content */}
                    <div className="relative z-10 p-6 text-center">
                      {/* Profile Image */}
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#00E5FF] transition-all duration-300">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name & Role */}
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-[#00E5FF] text-sm font-medium">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Join Our Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 rounded-3xl bg-gradient-to-br from-[#00E5FF]/10 to-[#00E5FF]/10 backdrop-blur-xl border border-[#00E5FF]/20 text-center"
            >
              <Users className="w-16 h-16 text-[#00E5FF] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">Team</span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                We're always looking for talented individuals who share our passion for innovation and excellence. Be part of something extraordinary.
              </p>
              <Link to="/careers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00E5FF] to-[#00E5FF] text-white font-bold rounded-full shadow-lg shadow-[#00E5FF]/30 hover:shadow-[#00E5FF]/50 transition-all"
                >
                  View Open Positions
                  <Rocket className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
