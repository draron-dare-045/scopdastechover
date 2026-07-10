'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-amber-400 mb-2">YN</div>
            <p className="text-gray-400 text-sm">
              Full-stack developer crafting beautiful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:hello@example.com" className="hover:text-amber-400 transition-colors">
                  hello@example.com
                </a>
              </li>
              <li>
                <a href="tel:+254746152008" className="hover:text-amber-400 transition-colors">
                  +254 746 152 008
                </a>
              </li>
              <li className="text-gray-500">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          >
            <p>© {currentYear} Your Name. All rights reserved.</p>
            <p>Crafted with Next.js, React, and Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer