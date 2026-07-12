'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ backgroundColor: 'var(--surface-strong)', borderColor: 'var(--border)' }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em]"
          style={{ color: 'var(--foreground)' }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-soft)', color: 'var(--accent)' }}>
            AO
          </span>
          <span className="hidden sm:block">Aron Onkware</span>
        </motion.a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ y: -1, color: 'var(--accent)' }}
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border p-2 transition-colors"
            style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden rounded-full border px-4 py-2 text-sm font-semibold transition-colors md:inline-flex"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-soft)', color: 'var(--accent)' }}
          >
            Let&apos;s talk
          </motion.a>

          <button
            className="rounded-full border p-2 md:hidden"
            style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t px-4 py-4 md:hidden"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-strong)' }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: 'var(--muted)' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 block rounded-full border px-3 py-2 text-center text-sm font-semibold"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-soft)', color: 'var(--accent)' }}
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation