import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, DollarSign, ChevronRight, Users, TrendingUp, Award, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ApplicationModal } from '@/app/components/careers/ApplicationModal';

const openPositions = [
  {
    id: 1,
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: 'RS/ 50,000 - 70,000',
    description: 'We are looking for a talented AI/ML Engineer to join our team. You will be responsible for building and deploying machine learning models and AI solutions that power our next-generation products.',
    requirements: [
      'Experience with Python and ML libraries (TensorFlow, PyTorch)',
      'Understanding of Natural Language Processing (NLP) and LLMs',
      'Knowledge of cloud platforms for deployment (AWS/GCP)',
      'Strong problem-solving skills and mathematical background',
      'Experience with data preprocessing and pipeline creation',
    ],
  }
];

const benefits = [
  {
    icon: MapPin,
    title: 'Remote First',
    description: 'Work from anywhere in the world',
  },
  {
    icon: Coffee,
    title: 'Flexible Hours',
    description: 'Choose your own working hours',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Continuous learning and development',
  },
  {
    icon: Award,
    title: 'Competitive Pay',
    description: 'Industry-leading salaries and bonuses',
  },
];

export function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleApply = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-16 min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] animate-float-delayed"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-6"
            >
              <Briefcase className="w-5 h-5 text-[#00E5FF]" />
              <span className="text-[#00E5FF] font-semibold">Join Our Team</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">Career</span> With Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              Join a team of passionate innovators building the future of digital solutions
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">Work With Us?</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                We offer more than just a job - we offer a career path and a supportive community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    className="relative group"
                  >
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00E5FF]/50 transition-all h-full text-center">
                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00E5FF]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-[#00E5FF]" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">Positions</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Explore exciting opportunities to grow your career with ManTash Innovations
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00E5FF]/50 transition-all p-8">
                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/0 to-[#00E5FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{position.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-400">
                            <span className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-[#00E5FF]" />
                              {position.department}
                            </span>
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-[#00E5FF]" />
                              {position.location}
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-[#00E5FF]" />
                              {position.type}
                            </span>
                            <span className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-[#00E5FF]" />
                              {position.salary}
                            </span>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleApply(position.title)}
                          className="flex items-center gap-2 px-6 py-3 bg-[#00E5FF] text-[#0B0E14] font-bold rounded-full hover:bg-[#00E5FF]/90 transition-all whitespace-nowrap cursor-pointer"
                        >
                          Apply Now
                          <ChevronRight className="w-5 h-5" />
                        </motion.button>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-400">
                              <span className="text-[#00E5FF] mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Don't See Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">Role?</span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                We're always looking for talented people. Send us your resume and let's talk about how you can contribute to our mission.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00E5FF] to-[#00E5FF] text-white font-bold rounded-full shadow-lg shadow-[#00E5FF]/30 hover:shadow-[#00E5FF]/50 transition-all"
                >
                  Get In Touch
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        positionTitle={selectedPosition}
      />
    </div>
  );
}
