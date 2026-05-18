import { motion } from 'motion/react'
import { Users, Calendar, Trophy, Rocket } from 'lucide-react'
import { SectionEyebrow } from './Primitives'

const chips = ['Web Dev', 'AI / ML', 'Game Dev', 'Competitive Programming', 'Open Source']

const features = [
  {
    icon: Users,
    title: 'Peer Mentorship',
    desc: 'Senior members guide newcomers through their first projects.',
  },
  {
    icon: Calendar,
    title: 'Weekly Meetings',
    desc: 'Workshops, code reviews, and lightning talks every [DAY] at [TIME].',
  },
  {
    icon: Trophy,
    title: 'Competitions',
    desc: 'We organize teams for hackathons, CTFs, and competitive programming contests.',
  },
  {
    icon: Rocket,
    title: 'Real Projects',
    desc: 'Ship apps used by real students. From idea to deployment, end to end.',
  },
]

export default function About() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow label="About" tag="Mission" />
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            More than just<br />a coding class.
          </h2>
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
            We're a student-run community where members of all levels learn by building. From your first "Hello World" to deploying full-stack apps, you'll find mentors, teammates, and projects worth caring about.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] font-mono"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="liquid-glass rounded-2xl p-6"
        >
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`flex gap-4 py-4 ${i < features.length - 1 ? 'border-b border-white/5' : ''}`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <Icon className="w-5 h-5 text-[#22ff88]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm text-white/60 mt-1 leading-[1.5]">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
