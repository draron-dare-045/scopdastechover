'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Independent Projects',
      period: '2022 — Present',
      description: 'Designing and developing polished web experiences with React, Next.js, and modern UI systems.',
    },
    {
      title: 'Product-focused Developer',
      company: 'Creative Collaborations',
      period: '2020 — 2022',
      description: 'Partnering with teams to turn ideas into clear interfaces, stronger user journeys, and faster products.',
    },
  ]

  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="mb-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Experience</span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Building thoughtful products through hands-on product and frontend experience.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                  {item.period}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{item.company}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
