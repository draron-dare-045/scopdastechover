'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'Vercel', 'AWS', 'GraphQL'],
    },
  ]

  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">About Me</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Thoughtful interfaces, built with care.
          </h2>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/20"
          >
            <p className="text-lg leading-8 text-slate-300">
              I&apos;m a product-minded developer from Nairobi, Kenya, with 3+ years of experience shaping products that feel intuitive, fast, and clear.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              My work sits at the intersection of design, engineering, and business outcomes. I&apos;m happiest when I can turn a rough idea into an experience people actually enjoy using.
            </p>
            <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Currently focused on</p>
              <p className="mt-2 text-base text-slate-200">Modern SaaS interfaces, AI-powered products, and thoughtful frontend architecture.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-4"
          >
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.05 * i }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About