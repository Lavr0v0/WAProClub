import { GitBranch, Camera, MessageCircle, Mail } from 'lucide-react'
import { LogoMark } from './Primitives'

const socialIcons = [
  { icon: GitBranch,     label: 'GitHub' },
  { icon: Camera,        label: 'Instagram' },
  { icon: MessageCircle, label: 'Discord' },
  { icon: Mail,          label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <LogoMark className="w-7 h-7" />
          <span className="font-bold tracking-tight">[CLUB_NAME]</span>
          <span className="text-xs text-white/40 ml-1">© 2026 · [SCHOOL_NAME]</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {socialIcons.map(({ icon: Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#22ff88] hover:border-[#22ff88]/30 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-6xl mx-auto px-6 mt-0 pb-8 pt-6 border-t border-white/5 text-center">
        <p className="text-[10px] text-white/30 font-mono">
          // Made with caffeine and questionable life choices by the [CLUB_NAME] members.
        </p>
      </div>
    </footer>
  )
}
