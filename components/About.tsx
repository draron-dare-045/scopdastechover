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
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Building digital experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              I'm a passionate full-stack developer from Nairobi, Kenya, with 3+ years of
              experience building responsive web applications that solve real problems.
            </p>
            <p className="text-lg leading-relaxed">
              My journey started with a curiosity about how things work on the web. Today, I
              specialize in creating intuitive user interfaces backed by robust backend systems.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, writing about
              web development, or exploring new tech frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold text-amber-400 uppercase mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      className="bg-slate-700 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium"
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
