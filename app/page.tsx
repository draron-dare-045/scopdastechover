import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <CursorGlow />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.14),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.15),transparent_28%)]" />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}