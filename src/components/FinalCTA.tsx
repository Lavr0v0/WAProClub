import { motion } from 'motion/react'
import { Mail } from 'lucide-react'
import { JoinButton, SecondaryButton } from './Primitives'

export default function FinalCTA() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="liquid-glass liquid-glass-green relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at 50% 0%, rgba(34,255,136,0.2), transparent 70%)',
            opacity: 0.6,
          }}
        />

        {/* Watermark */}
        <p className="absolute top-4 left-6 opacity-10 font-mono text-xs text-[#22ff88] pointer-events-none select-none">
          {'> ./join.sh --user [you]'}
        </p>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Stop scrolling.<br />Start shipping.
          </h2>
          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            The best time to join was last semester. The second best time is right now. Come build with us.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <JoinButton label="Sign me up" />
            <SecondaryButton>
              <Mail className="w-4 h-4" /> Email the officers
            </SecondaryButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
