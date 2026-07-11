'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const projects = [
    {
      title: 'Banking App',
      description: 'A premium financial dashboard designed for clarity, trust, and effortless account management.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Redux'],
      image: 'https://images.unsplash.com/photo-1611697260904-210330a63efe?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Amazon Bedrock Agents',
      description: 'An AI-driven platform concept focused on intelligent automation and thoughtful developer workflows.',
      tags: ['Next.js', 'AWS', 'AI/ML', 'Python'],
      image: 'https://images.unsplash.com/photo-1677442d019cecf4fbb9ffc827260785?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Cursor AI Community',
      description: 'A community-led experience for sharing knowledge, collaboration, and meaningful product discovery.',
      tags: ['Next.js', 'WebSockets', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Portfolio</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Selected projects</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            A collection of work that balances beautiful interfaces with real-world product thinking.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-slate-950/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              </div>

              <div className="space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-amber-300"
                  >
                    <FaGithub size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-amber-300"
                  >
                    <ArrowUpRight size={16} />
                    Preview
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects