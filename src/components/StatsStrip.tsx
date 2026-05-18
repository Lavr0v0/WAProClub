import { motion } from 'motion/react'

const stats = [
  { value: '[XX]+', label: 'Active Members' },
  { value: '[XX]',  label: 'Workshops This Year' },
  { value: '[XX]',  label: 'Group Projects Shipped' },
  { value: '[XX]',  label: 'Hackathon Wins' },
]

export default function StatsStrip() {
  return (
    <div className="relative z-10 border-y border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
          >
            <div className="text-3xl md:text-4xl font-semibold text-[#22ff88] font-mono">{value}</div>
            <div className="text-xs text-white/50 mt-1 uppercase tracking-widest">{label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
