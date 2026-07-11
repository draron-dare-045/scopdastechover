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
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">About</span>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            I bring together product thinking, visual craft, and reliable engineering.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/20">
            <p className="text-lg leading-8 text-slate-300">
              I&apos;m a product-minded developer based in Nairobi, with a strong focus on clarity, pace, and elegance. I enjoy shaping experiences that feel polished from the first interaction and hold up well in the real world.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              My best work sits at the intersection of design systems, web performance, and product storytelling. I care about the details that make an interface feel confident and calm.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-amber-400/20 bg-amber-400/10 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300">Approach</p>
              <p className="mt-2 text-base text-slate-200">I work best when the goal is clear, the experience matters, and the product needs to feel simply better than before.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="space-y-4">
            {focusAreas.map((area, index) => (
              <motion.div key={index} whileHover={{ y: -3, scale: 1.01 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">{area.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{area.description}</p>
              </motion.div>
            ))}

            <motion.div whileHover={{ y: -3, scale: 1.01 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Core stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item, index) => (
                  <motion.span key={index} initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.25, delay: 0.03 * index }} whileHover={{ y: -2, scale: 1.03 }} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
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