'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 md:grid-cols-3">
          <div>
            <div className="text-xl font-semibold text-amber-300">Aron Onkware</div>
            <p className="mt-3 max-w-xs text-sm leading-7 text-slate-400">
              Designing and building calm, modern web experiences with a strong point of view.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="transition-colors hover:text-amber-300">Home</a></li>
              <li><a href="#about" className="transition-colors hover:text-amber-300">About</a></li>
              <li><a href="#projects" className="transition-colors hover:text-amber-300">Projects</a></li>
              <li><a href="#contact" className="transition-colors hover:text-amber-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="mailto:aronondieki046@gmail.com" className="transition-colors hover:text-amber-300">aronondieki046@gmail.com</a></li>
              <li><a href="tel:+254746152008" className="transition-colors hover:text-amber-300">+254 746 152 008</a></li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {currentYear} Aron Onkware. All rights reserved.</p>
          <p>Crafted with Next.js, React, and Tailwind CSS.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer