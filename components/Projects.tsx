'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const projects = [
    {
      title: 'Banking App',
      description: 'Modern banking dashboard with real-time transactions, balance tracking, and expense analytics.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Redux'],
      image: 'https://images.unsplash.com/photo-1611697260904-210330a63efe?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Amazon Bedrock Agents',
      description: 'AI-powered agents platform leveraging AWS services for intelligent automation and data processing.',
      tags: ['Next.js', 'AWS', 'AI/ML', 'Python'],
      image: 'https://images.unsplash.com/photo-1677442d019cecf4fbb9ffc827260785?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Cursor AI Community',
      description: 'Community platform for AI enthusiasts with real-time collaboration and knowledge sharing features.',
      tags: ['Next.js', 'WebSockets', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Selected Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Here are some of my recent works showcasing expertise in web development, UI/UX design, and data science.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-400 transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-700/50 text-amber-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <FaGithub size={18} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-2 text-lg"
          >
            View All Projects
            <FaExternalLinkAlt size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects