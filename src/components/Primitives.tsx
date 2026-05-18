import type { ReactNode } from 'react'
import { ChevronRight, Code2 } from 'lucide-react'

export function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="white" className={className}>
      <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
    </svg>
  )
}

interface JoinButtonProps {
  label?: string
  full?: boolean
}
export function JoinButton({ label = 'Join Us', full = false }: JoinButtonProps) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[#22ff88] text-black font-semibold text-sm px-5 py-3 transition-all hover:opacity-90 active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(34,255,136,0.6)]${full ? ' w-full' : ''}`}
    >
      <Code2 className="w-4 h-4" />
      {label}
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
    </button>
  )
}

interface SecondaryButtonProps {
  children: ReactNode
  onClick?: () => void
}
export function SecondaryButton({ children, onClick }: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 inline-flex items-center gap-2 transition-colors"
    >
      {children}
    </button>
  )
}

interface SectionEyebrowProps {
  label: string
  tag?: string
}
export function SectionEyebrow({ label, tag }: SectionEyebrowProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-[#22ff88]" />
      <span className="text-white/70 text-sm font-medium tracking-wide">{label}</span>
      {tag && (
        <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs ml-2">
          {tag}
        </span>
      )}
    </div>
  )
}

export const gradientStyle: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #062010 0%, #0d3a1f 12.5%, #88ffb8 32.5%, #22ff88 50%, #0d3a1f 67.5%, #062010 87.5%, #062010 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
}
