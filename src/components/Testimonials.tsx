import { motion } from 'motion/react'
import { Quote } from 'lucide-react'
import { SectionEyebrow } from './Primitives'

const testimonials = [
  {
    quote: 'Joining this club was the best decision of my high school career. I went from zero to shipping my own web apps in one semester.',
    name: 'Alex K.',
    role: 'Junior · Club President',
    initial: 'A',
  },
  {
    quote: "The community here is unmatched. Senior members actually take time to help you debug, learn, and grow. I've made my closest friends here.",
    name: 'Jordan M.',
    role: 'Sophomore · Web Team Lead',
    initial: 'J',
  },
  {
    quote: "We placed top 5 at our regional hackathon as freshmen. None of that happens without this club's mentorship and culture.",
    name: 'Sam L.',
    role: 'Freshman · ML Team',
    initial: 'S',
  },
]

export default function Testimonials() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="text-center">
        <SectionEyebrow label="Members" />
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 leading-[1.05]">
          Built by students,<br />for students.
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {testimonials.map(({ quote, name, role, initial }, i) => (
          <motion.figure
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="liquid-glass rounded-2xl p-6"
          >
            <Quote className="w-6 h-6 text-[#22ff88]/40" />
            <blockquote className="text-sm text-white/80 leading-[1.6] mt-4">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#22ff88] to-emerald-700 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                {initial}
              </div>
              <div>
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-white/50">{role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
