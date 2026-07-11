'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false)
  const x = useMotionValue(-120)
  const y = useMotionValue(-120)
  const smoothX = useSpring(x, { stiffness: 180, damping: 24, mass: 0.5 })
  const smoothY = useSpring(y, { stiffness: 180, damping: 24, mass: 0.5 })

  useEffect(() => {
    setMounted(true)

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [x, y])

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.24),rgba(56,189,248,0.1)_42%,transparent_72%)] blur-3xl"
        style={{ x: smoothX, y: smoothY }}
      />
    </div>
  )
}
