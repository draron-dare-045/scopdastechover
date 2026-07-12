'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const focusAreas = [
    {
      title: 'Design',
      description: 'Clear product direction, polished UI language, and intentional interactions.',
    },
    {
      title: 'Build',
      description: 'Fast-moving frontend systems using React, Next.js, and modern tooling.',
    },
    {
      title: 'Scale',
      description: 'Thoughtful architecture and a strong product mindset from concept to launch.',
    },
  ]

  const stack = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL', 'AWS']

  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">About Me</span>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl" style={{ color: 'var(--foreground)' }}>
            I’m Aron Onkware, and I bring together product thinking, visual craft, and reliable engineering.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[2rem] p-8 surface-card" style={{ borderColor: 'var(--border)' }}>
            <p className="text-lg leading-8 surface-muted">
              I&apos;m a product-minded developer based in Nairobi, with a strong focus on clarity, pace, and elegance. I enjoy shaping experiences that feel polished from the first interaction and hold up well in the real world.
            </p>
            <p className="mt-5 text-lg leading-8 surface-muted">
              My best work sits at the intersection of design systems, web performance, and product storytelling. I care about the details that make an interface feel confident and calm.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-amber-400/20 bg-amber-400/10 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300">Approach</p>
              <p className="mt-2 text-base" style={{ color: 'var(--foreground)' }}>I work best when the goal is clear, the experience matters, and the product needs to feel simply better than before.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="space-y-4">
            {focusAreas.map((area, index) => (
              <motion.div key={index} whileHover={{ y: -3, scale: 1.01 }} className="rounded-[1.5rem] p-5 surface-card" style={{ borderColor: 'var(--border)' }}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] surface-accent">{area.title}</h3>
                <p className="mt-2 text-sm leading-7 surface-muted">{area.description}</p>
              </motion.div>
            ))}

            <motion.div whileHover={{ y: -3, scale: 1.01 }} className="rounded-[1.5rem] p-5 surface-card" style={{ borderColor: 'var(--border)' }}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] surface-accent">Core stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item, index) => (
                  <motion.span key={index} initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.25, delay: 0.03 * index }} whileHover={{ y: -2, scale: 1.03 }} className="rounded-full border px-3 py-2 text-sm" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-soft)', color: 'var(--foreground)' }}>
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About