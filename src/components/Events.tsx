import { motion } from 'motion/react'
import { Clock, MapPin } from 'lucide-react'
import { SectionEyebrow } from './Primitives'

const events = [
  { month: 'MAY', day: '22', title: 'Intro to React Workshop',    time: '3:30 PM', location: 'Room 204',   tag: 'Workshop'  },
  { month: 'MAY', day: '29', title: 'Spring Hackathon Kickoff',   time: '4:00 PM', location: 'Library',    tag: 'Hackathon' },
  { month: 'JUN', day: '05', title: 'Guest Talk: Life as a SWE',  time: '3:30 PM', location: 'Auditorium', tag: 'Talk'      },
  { month: 'JUN', day: '12', title: 'End-of-Year Demo Night',     time: '6:00 PM', location: 'Cafeteria',  tag: 'Social'    },
]

export default function Events() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center">
        <SectionEyebrow label="Events" tag="This semester" />
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 leading-[1.05]">
          Drop in. Build something.
        </h2>
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {events.map(({ month, day, title, time, location, tag }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="liquid-glass rounded-xl p-5 flex items-center gap-5 hover:border-[#22ff88]/20 transition-colors"
          >
            {/* Date */}
            <div className="flex-shrink-0 w-16 text-center">
              <div className="text-xs text-[#22ff88] uppercase font-mono font-semibold">{month}</div>
              <div className="text-2xl font-semibold leading-none mt-1">{day}</div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold truncate">{title}</p>
              <div className="text-xs text-white/50 mt-1 flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {location}
                </span>
              </div>
            </div>

            {/* Tag */}
            <span className="flex-shrink-0 text-[10px] px-2.5 py-1 rounded-full border border-white/10 font-mono uppercase tracking-wider text-white/50">
              {tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
