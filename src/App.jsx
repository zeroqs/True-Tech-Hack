import './App.css'
import ReactPlayer from 'react-player'
import React from 'react'
import Controllers from './components/contollers/Controllers.jsx'
import {
  useBlur,
  useBrightness,
  useContrast,
  useSaturation,
} from './context/ControllersContext.jsx'

function App() {
  const { brightness } = useBrightness()
  const { contrast } = useContrast()
  const { saturation } = useSaturation()
  const { blur } = useBlur()

  return (
    <div className="App">
      <div>
        <div
          style={{
            filter: `brightness(${brightness / 100}) 
            contrast(${contrast / 100}) 
            saturate(${saturation / 100}) 
            blur(${blur}px)
            `,
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=p3vfmNIjmW4"
            controls={false}
          />
        </div>
        <Controllers />
      </div>
    </div>
  )
}

export default App
