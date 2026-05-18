import { motion } from 'motion/react'
import { UserPlus, Calendar, Code2 } from 'lucide-react'
import { SectionEyebrow } from './Primitives'

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Fill the form',
    desc: 'Sign up via our short Google Form. We just need your name, grade, and what you\'re interested in learning.',
  },
  {
    num: '02',
    icon: Calendar,
    title: 'Show up to a meeting',
    desc: 'Drop into any [DAY] meeting at [TIME] in [LOCATION]. First meeting is always an open hangout.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Start building',
    desc: 'Pick a track (web, AI, games, comp programming) or just explore. We\'ll pair you with a mentor and a starter project.',
  },
]

export default function HowToJoin() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center">
        <SectionEyebrow label="Get Started" tag="3 easy steps" />
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 leading-[1.05]">
          Joining takes<br />2 minutes.
        </h2>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {steps.map(({ num, icon: Icon, title, desc }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="liquid-glass rounded-2xl p-6 relative"
          >
            <span className="absolute top-5 right-5 text-5xl font-bold text-[#22ff88]/20 font-mono leading-none">
              {num}
            </span>
            <div className="w-10 h-10 rounded-lg bg-[#22ff88]/10 border border-[#22ff88]/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#22ff88]" />
            </div>
            <h3 className="text-lg font-semibold mt-5">{title}</h3>
            <p className="text-sm text-white/60 mt-2 leading-[1.6]">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
