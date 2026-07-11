'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const featuredProject = {
    title: 'Northstar Finance',
    description: 'A premium finance product experience designed around trust, clarity, and streamlined decision-making for modern teams.',
    tags: ['React', 'TypeScript', 'Design Systems', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&h=800&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  }

  const projects = [
    {
      title: 'Bedrock Agents',
      description: 'An AI-assisted workflow experience crafted for clarity, speed, and confident product interaction.',
      tags: ['Next.js', 'AWS', 'AI'],
      image: 'https://images.unsplash.com/photo-1677442d019cecf4fbb9ffc827260785?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Cursor Community',
      description: 'A community-led digital experience shaped around collaboration, discovery, and a stronger sense of belonging.',
      tags: ['Next.js', 'WebSockets', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Portfolio</span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Selected work</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            A snapshot of the kind of work I enjoy most: thoughtful interfaces, product clarity, and polished execution from concept to launch.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-slate-950/20 lg:p-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div whileHover={{ scale: 1.01 }} className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <img src={featuredProject.image} alt={featuredProject.title} className="h-full min-h-[280px] w-full object-cover transition-transform duration-500" />
            </motion.div>

            <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300">Featured project</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{featuredProject.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{featuredProject.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag, index) => (
                    <span key={index} className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4">
                <motion.a href={featuredProject.github} target="_blank" rel="noopener noreferrer" whileHover={{ x: 2, y: -1 }} className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-amber-300">
                  <FaGithub size={16} />
                  Code
                </motion.a>
                <motion.a href={featuredProject.live} target="_blank" rel="noopener noreferrer" whileHover={{ x: 2, y: -1 }} className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-amber-300">
                  <ArrowUpRight size={16} />
                  Preview
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={index} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 * index }} whileHover={{ y: -5, scale: 1.01 }} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20">
              <div className="h-44 overflow-hidden">
                <motion.img src={project.image} alt={project.title} whileHover={{ scale: 1.04 }} className="h-full w-full object-cover transition-transform duration-500" />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">{tag}</span>
                  ))}
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