'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-lg font-semibold text-slate-100"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-sm font-bold text-amber-300">
            AO
          </span>
          <span className="hidden sm:block">Aron</span>
        </motion.a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ y: -2, color: '#fbbf24' }}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-amber-300"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 transition-colors hover:bg-amber-400/20 md:inline-flex"
        >
          Let&apos;s talk
        </motion.a>

        <button
          className="rounded-full border border-white/10 p-2 text-slate-200 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-amber-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 block rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-center text-sm font-semibold text-amber-300"
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s talk
          </a>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation