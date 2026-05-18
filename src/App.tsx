import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import HowToJoin from './components/HowToJoin'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      {/* Global SVG noise filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="c3-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Background video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover pointer-events-none opacity-40"
          src="[BACKGROUND_VIDEO_URL]"
        />
      </div>

      {/* Dark overlay */}
      <div className="fixed inset-0 z-[1] bg-gradient-to-b from-[#0c0c0c]/40 via-transparent to-[#0c0c0c] pointer-events-none" />

      {/* Vertical guide lines */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <StatsStrip />
        <About />
        <TechStack />
        <Projects />
        <Events />
        <Testimonials />
        <HowToJoin />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  )
}
