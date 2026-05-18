import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'
import { JoinButton, SecondaryButton, gradientStyle } from './Primitives'

export default function Hero() {
  return (
    <section className="pt-20 md:pt-32 pb-24 text-center flex flex-col items-center relative z-10">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22ff88]/30 bg-[#22ff88]/10 text-[#22ff88] text-xs font-medium font-mono"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#22ff88] animate-pulse" />
        [SEMESTER] · Now Recruiting
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]"
      >
        <span className="block text-white">Code together.</span>
        <span className="block animate-shiny" style={gradientStyle}>
          Build the future.
        </span>
      </motion.h1>

      {/* Body */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 text-white/60 max-w-lg text-base leading-[1.6]"
      >
        [CLUB_NAME] is where curious students meet real engineering. Weekly workshops, collaborative projects, hackathons, and a community of builders who ship.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <JoinButton />
        <SecondaryButton>
          See our projects <ChevronRight className="w-4 h-4" />
        </SecondaryButton>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-4 text-xs text-white/40 font-mono"
      >
        // Open to all skill levels · No experience required
      </motion.p>
    </section>
  )
}
