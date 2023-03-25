import Player from './pages/player/Player.jsx'
import Settings from './pages/settings/Settings.jsx'
import { Route, Routes } from 'react-router-dom'
import video from './assets/38_serie_Pockemon_cut.mp4'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Settings />} />
      <Route path="/player" element={<Player url={video}/>} />
    </Routes>
  )
}

export default App
