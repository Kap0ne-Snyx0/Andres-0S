import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Benchmark from './pages/Benchmark'
import Architecture from './pages/Architecture'
import Rules from './pages/Rules'
import Commands from './pages/Commands'
import Automation from './pages/Automation'
import Skills from './pages/Skills'
import Connectors from './pages/Connectors'
import Memory from './pages/Memory'
import Security from './pages/Security'
import BusinessOS from './pages/BusinessOS'
import Roadmap from './pages/Roadmap'
import History from './pages/History'
import Settings from './pages/Settings'
import SystemInfo from './pages/SystemInfo'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/benchmark" element={<Benchmark />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/commands" element={<Commands />} />
      <Route path="/automation" element={<Automation />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/connectors" element={<Connectors />} />
      <Route path="/memory" element={<Memory />} />
      <Route path="/security" element={<Security />} />
      <Route path="/business-os" element={<BusinessOS />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/history" element={<History />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/system" element={<SystemInfo />} />
    </Routes>
  )
}
