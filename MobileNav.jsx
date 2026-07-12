import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Gauge, ScrollText, Terminal, Info } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', icon: LayoutDashboard, end: true },
  { to: '/benchmark', label: 'Bench', icon: Gauge },
  { to: '/rules', label: 'Rules', icon: ScrollText },
  { to: '/commands', label: 'Cmds', icon: Terminal },
  { to: '/system', label: 'System', icon: Info },
]

export default function MobileNav() {
  return (
    <nav className="mobile-nav" style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50, display: 'none',
      background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)', borderTop: '1px solid var(--border-soft)',
      padding: '10px 6px', justifyContent: 'space-around',
    }}>
      {links.map(({ to, label, icon: Icon, end }) => (
        <NavLink key={to} to={to} end={end} style={({ isActive }) => ({
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
          fontSize: 9.5, color: isActive ? '#fff' : 'var(--text-faint)', fontWeight: 600,
        })}>
          <Icon size={17} strokeWidth={2} />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
