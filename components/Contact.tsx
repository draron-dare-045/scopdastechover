'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ArrowRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/draron-dare-045', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aron-onkware-221b27362/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:aronondieki046@gmail.com', label: 'Email' },
  ]

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Contact</span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Let&apos;s make something worth remembering.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            If you have a product, launch, or interface that needs a sharper edge, I&apos;d love to help shape it.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10 grid gap-6 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300">Email</h3>
              <a href="mailto:aronondieki046@gmail.com" className="mt-2 block text-lg font-medium text-slate-100 transition-colors hover:text-amber-300">aronondieki046@gmail.com</a>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300">Location</h3>
              <p className="mt-2 text-lg text-slate-200">Nairobi, Kenya</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300">Availability</h3>
              <p className="mt-2 text-lg text-slate-200">Open to freelance and product collaborations.</p>
            </div>
          </div>

          <motion.form initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" value={formState.name} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400/50" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" value={formState.email} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400/50" />
              </label>
            </div>

            <label className="space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea name="message" placeholder="Tell me about your idea or project" value={formState.message} onChange={handleChange} required rows={6} className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400/50" />
            </label>

            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 font-semibold text-slate-950">
              Send message
              <ArrowRight size={16} />
            </motion.button>
          </motion.form>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04, y: -2 }} className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-amber-400/40 hover:text-amber-300">
                <Icon size={18} />
                {social.label}
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact