import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  LayoutDashboard, GitBranch, Gauge, Terminal, ScrollText, Cpu, Puzzle, Plug,
  Bot, BrainCircuit, ShieldCheck, Briefcase, Map, History, Settings, Info,
} from 'lucide-react'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/benchmark', label: 'Benchmark', icon: Gauge },
  { to: '/architecture', label: 'Architecture', icon: GitBranch },
  { to: '/rules', label: 'Rules', icon: ScrollText },
  { to: '/commands', label: 'Commands', icon: Terminal },
  { to: '/automation', label: 'Automation', icon: Bot },
  { to: '/skills', label: 'Skills', icon: Puzzle },
  { to: '/connectors', label: 'Connectors', icon: Plug },
  { to: '/memory', label: 'Memory', icon: BrainCircuit },
  { to: '/security', label: 'Security', icon: ShieldCheck },
  { to: '/business-os', label: 'Business OS', icon: Briefcase },
  { to: '/roadmap', label: 'Roadmap', icon: Map },
  { to: '/history', label: 'Version History', icon: History },
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/system', label: 'System Info', icon: Info },
]

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -16, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', left: 0, top: 0, bottom: 0, width: 220, zIndex: 50,
        borderRight: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column',
        padding: '22px 14px', background: '#000',
      }}
      className="sidebar-desktop"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px', marginBottom: 28 }}>
        <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg,#a855f7,#4f8cff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800 }}>AO</div>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.02em' }}>Andres OS</div>
          <div style={{ fontSize: 9.5, color: 'var(--text-faint)', letterSpacing: '.06em' }}>PLATFORM v5.0</div>
        </div>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, overflowY: 'auto' }}>
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to} to={to} end={end}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 10,
              fontSize: 12.6, fontWeight: 500, color: isActive ? '#fff' : 'var(--text-dim)',
              background: isActive ? 'var(--panel-2)' : 'transparent',
            })}
          >
            <Icon size={15} strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="pill" style={{ justifyContent: 'center', marginTop: 12 }}>
        <span className="pill-dot" style={{ background: '#4f8cff' }} />
        Vercel connected
      </div>
    </motion.aside>
  )
}
