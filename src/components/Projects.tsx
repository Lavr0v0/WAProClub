import { motion } from 'motion/react'
import { Code2, Bot, Gamepad2, Globe, Database, Cpu, ArrowUpRight, GitBranch } from 'lucide-react'
import { SectionEyebrow, SecondaryButton } from './Primitives'

const projects = [
  { icon: Code2,    title: 'Project Alpha',      desc: 'A collaborative code editor built for the classroom. Real-time sync with zero setup.',     tags: ['React', 'WebSockets'] },
  { icon: Bot,      title: 'Lorem Builder',      desc: 'AI-powered study assistant trained on your own notes. Built with Python and OpenAI.',        tags: ['Python', 'AI/ML'] },
  { icon: Gamepad2, title: 'Ipsum Engine',        desc: 'A 2D game engine written from scratch in C++. Runs in the browser via WebAssembly.',        tags: ['C++', 'WASM'] },
  { icon: Globe,    title: 'Dolor Stack',         desc: 'School event platform replacing the bulletin board. 400+ daily active users.',             tags: ['Node.js', 'React'] },
  { icon: Database, title: 'Amet Studio',         desc: 'Visual query builder for beginners learning SQL. Drag-and-drop interface, zero config.',     tags: ['TypeScript', 'SQL'] },
  { icon: Cpu,      title: 'Consectetur Lab',     desc: 'Hardware sensor dashboard for the school garden. Raspberry Pi + real-time charting.',        tags: ['Python', 'Linux'] },
]

export default function Projects() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="flex items-end justify-between mb-10">
        <div>
          <SectionEyebrow label="Projects" tag="Built by members" />
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 leading-[1.05]">
            What we're<br />building.
          </h2>
        </div>
        <div className="hidden md:block">
          <SecondaryButton>
            <GitBranch className="w-4 h-4" /> View all on GitHub
          </SecondaryButton>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(({ icon: Icon, title, desc, tags }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="liquid-glass rounded-2xl p-5 group cursor-pointer hover:bg-white/[0.02] transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#22ff88]/10 border border-[#22ff88]/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#22ff88]" />
            </div>
            <h3 className="text-base font-semibold mt-4">{title}</h3>
            <p className="text-sm text-white/60 mt-2 leading-[1.5]">{desc}</p>
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
              <div className="flex gap-1.5">
                {tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/50 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#22ff88] transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
