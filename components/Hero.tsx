'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Layers3, Sparkles } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.25,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  const highlights = [
    { icon: Code2, label: 'Full-stack web builds' },
    { icon: Layers3, label: 'UI systems & product design' },
  ]

  const stats = [
    { value: '3+', label: 'Years building' },
    { value: '20+', label: 'Projects shipped' },
    { value: '100%', label: 'Craft-focused' },
  ]

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center justify-center px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_70%)]" />

      <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              <Sparkles size={14} />
              Available for impactful work
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            I&apos;m Aron Onkware.
            <span className="mt-3 block bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              I build polished digital products.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl text-lg leading-8 text-slate-300">
            I design and ship fast, thoughtful web experiences with React, Next.js, and modern UI systems that feel premium from the first click.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-3 pt-2 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 font-semibold text-slate-950 transition-all"
            >
              Explore my work
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition-all hover:border-amber-400/40 hover:bg-amber-400/10"
            >
              Let&apos;s connect
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                  <Icon size={14} className="text-amber-300" />
                  {item.label}
                </div>
              )
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-2xl shadow-slate-950/30 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-xl border border-white/5 bg-white/5 p-3 text-center">
                <div className="text-2xl font-bold text-amber-300">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-sky-500/15 to-fuchsia-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-3 shadow-2xl shadow-black/30">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=900&fit=crop"
              alt="Portrait of Aron"
              className="h-[520px] w-full rounded-[1.4rem] object-cover"
            />
            <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Currently crafting</p>
              <p className="mt-1 text-lg font-semibold text-white">AI-first products and modern web platforms</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero