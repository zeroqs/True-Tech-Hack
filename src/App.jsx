import Player from './pages/player/Player.jsx'
import Settings from './pages/settings/Settings.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Settings />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  )
}

export default App
