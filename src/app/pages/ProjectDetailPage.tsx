import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Star } from 'lucide-react';
import { projects } from '@/app/data/projects';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl border border-border"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold mt-4 mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Client</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Category</h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {/* The Problem */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">Problem</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-[#00E5FF]">Solution</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">{project.solution}</p>
                
                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-white">Implementation Approach</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-[#00E5FF] mt-1">•</span>
                        <span>Conducted comprehensive requirement analysis and user research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00E5FF] mt-1">•</span>
                        <span>Designed scalable architecture with modern tech stack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00E5FF] mt-1">•</span>
                        <span>Implemented agile development with continuous client feedback</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-white">Key Deliverables</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-[#00E5FF] mt-1">•</span>
                        <span>Fully responsive web application with intuitive UI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00E5FF] mt-1">•</span>
                        <span>Secure backend infrastructure with real-time capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00E5FF] mt-1">•</span>
                        <span>Comprehensive documentation and ongoing support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Results */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <ul className="space-y-4">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(project.testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-2xl font-semibold mb-6">
              "{project.testimonial.text}"
            </blockquote>
            <div>
              <p className="font-semibold">{project.testimonial.author}</p>
              <p className="text-muted-foreground">{project.testimonial.position}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Want a Similar Project?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
