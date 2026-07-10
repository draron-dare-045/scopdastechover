'use client';
import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 w-full bg-black/90 p-6 flex justify-between items-center z-50 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center font-bold">AO</div>
          <span className="text-2xl font-semibold">Aron Onkware</span>
        </div>
        <div className="flex gap-8">
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-7xl font-bold mb-6">Aron Onkware</h1>
        <p className="text-3xl text-zinc-400 mb-10">Software Engineer • Nairobi</p>
        <div className="flex justify-center gap-6">
          <a href="#projects" className="px-10 py-4 bg-white text-black rounded-full font-medium text-lg">See My Work</a>
        </div>
      </section>

      <section id="projects" className="py-20 bg-zinc-950 px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Banking App</h3>
            <p className="text-zinc-400">Modern financial dashboard</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">AI Tools</h3>
            <p className="text-zinc-400">Intelligent automation</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Community Platform</h3>
            <p className="text-zinc-400">Developer hub in Kenya</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-zinc-400">aronondieki045@gmail.com</p>
        <p className="text-xl text-zinc-400 mt-2">+254 755 176397</p>
      </section>
    </div>
  );
}