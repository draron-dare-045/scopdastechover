'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t px-4 py-10 sm:px-6 lg:px-8" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-strong)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] p-8 md:grid-cols-3 surface-card" style={{ borderColor: 'var(--border)' }}>
          <div>
            <div className="text-xl font-semibold surface-accent">Aron Onkware</div>
            <p className="mt-3 max-w-xs text-sm leading-7 surface-muted">
              Building refined digital products with clarity, performance, and a premium user experience.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: 'var(--foreground)' }}>Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm surface-muted">
              <li><a href="#home" className="transition-colors hover:text-amber-300">Home</a></li>
              <li><a href="#about" className="transition-colors hover:text-amber-300">About</a></li>
              <li><a href="#skills" className="transition-colors hover:text-amber-300">Skills</a></li>
              <li><a href="#projects" className="transition-colors hover:text-amber-300">Projects</a></li>
              <li><a href="#experience" className="transition-colors hover:text-amber-300">Experience</a></li>
              <li><a href="#contact" className="transition-colors hover:text-amber-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: 'var(--foreground)' }}>Contact</h4>
            <ul className="mt-4 space-y-2 text-sm surface-muted">
              <li><a href="mailto:aronondieki046@gmail.com" className="transition-colors hover:text-amber-300">aronondieki046@gmail.com</a></li>
              <li><a href="tel:+254746152008" className="transition-colors hover:text-amber-300">+254 746 152 008</a></li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-6 flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm md:flex-row" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
          <p>© {currentYear} Aron Onkware. All rights reserved.</p>
          <p>Crafted with Next.js, React, and Tailwind CSS.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer