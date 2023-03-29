import Player from './pages/player/Player.jsx'
import { Route, Routes } from 'react-router-dom'
import video from './assets/38_serie_Pockemon_cut.mp4'
import videoCut from './assets/38_serie_without_epi.mp4'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Player url={video} />} />
      <Route path="/safe-video" element={<Player url={videoCut} />} />
    </Routes>
  )
}

export default App
