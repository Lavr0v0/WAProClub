import { motion } from 'motion/react'

const techs = ['Python', 'JavaScript', 'React', 'Node.js', 'C++', 'Java', 'Git', 'Linux']

export default function TechStack() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="text-center text-xs uppercase tracking-widest text-white/40 font-mono">
        // The tools we love
      </p>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-3 text-center">
        From beginner-friendly to industry-grade.
      </h2>
      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6">
        {techs.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="flex items-center justify-center"
          >
            <span className="text-sm font-semibold tracking-tight text-white/50 hover:text-[#22ff88] transition-colors cursor-default font-mono">
              {tech}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
