'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ArrowRight, Code2, LayoutGrid, Sparkles } from 'lucide-react'

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const services = [
    {
      icon: LayoutGrid,
      title: 'Product interfaces',
      description: 'Thoughtful web experiences with strong visual hierarchy, smooth motion, and clear product storytelling.',
    },
    {
      icon: Code2,
      title: 'Frontend engineering',
      description: 'Reliable React and Next.js builds focused on speed, structure, and maintainable product delivery.',
    },
    {
      icon: Sparkles,
      title: 'Design systems',
      description: 'Scalable UI foundations with reusable patterns that keep products consistent as they grow.',
    },
  ]

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="mb-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Skills</span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: 'var(--foreground)' }}>
            I build modern products with a balance of design, code, and product thinking.
          </h2>
          <p className="mt-4 text-lg leading-8 surface-muted">
            From concept to execution, I focus on clarity, craft, and user experience so the work feels considered at every stage.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-[1.75rem] p-6 surface-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold" style={{ color: 'var(--foreground)' }}>{service.title}</h3>
                <p className="mt-3 text-sm leading-7 surface-muted">{service.description}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium surface-accent transition-colors hover:text-amber-200">
                  Start a project
                  <ArrowRight size={16} />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
