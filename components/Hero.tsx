'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Layers3, Sparkles } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65 },
    },
  }

  const highlights = [
    { icon: Code2, label: 'Product engineering' },
    { icon: Layers3, label: 'Interface systems' },
  ]

  const stats = [
    { value: '3+', label: 'Years shipping' },
    { value: '20+', label: 'Launches shaped' },
    { value: '100%', label: 'Craft-led' },
  ]

  const ambientOrbs = [
    { className: 'left-[-8%] top-20 h-48 w-48', delay: 0 },
    { className: 'right-[-6%] bottom-10 h-56 w-56', delay: 1.2 },
  ]

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {ambientOrbs.map((orb, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -18, 0],
              x: [0, 12, 0],
              scale: [1, 1.05, 1],
              rotate: [0, 3, 0],
            }}
            transition={{ duration: 8 + index, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: orb.delay }}
            className={`absolute ${orb.className} rounded-full bg-gradient-to-br from-amber-400/20 via-sky-500/10 to-fuchsia-500/20 blur-3xl`}
          />
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]"
        />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl space-y-7">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-300">
                <Sparkles size={14} />
                Available for select work
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-7xl">
              I build refined digital experiences that feel effortless.
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-2xl text-lg leading-8 text-slate-300">
              I partner with founders and teams to turn ambitious ideas into polished products, precise interfaces, and reliable frontend systems.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row">
              <motion.a href="#projects" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 font-semibold text-slate-950 transition-all">
                View projects
                <ArrowRight size={18} />
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition-all hover:border-amber-400/40 hover:bg-amber-400/10">
                Start a conversation
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div key={index} whileHover={{ y: -3, scale: 1.02 }} className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                    <Icon size={14} className="text-amber-300" />
                    {item.label}
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-amber-400/20 bg-amber-400/10 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300">Currently crafting</p>
              <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                High-conviction product experiences for modern brands and fast-moving teams.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <motion.div whileHover={{ y: -3, scale: 1.02 }} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Design systems</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Clear, scalable UI foundations that stay elegant as products grow.</p>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Frontend execution</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Fast, reliable interfaces with thoughtful interaction and performance.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-xl shadow-slate-950/30 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div key={index} whileHover={{ y: -3, scale: 1.02 }} className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-amber-300">{stat.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero