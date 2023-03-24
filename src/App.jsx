import './App.css'
import ReactPlayer from 'react-player'
import React from 'react'
import Controllers from './components/contollers/Controllers.jsx'
import { useBrightness, useContrast } from './context/ControllersContext.jsx'

function App() {
  const { brightness } = useBrightness()
  const { contrast } = useContrast()
  return (
    <div className="App">
      <div>
        <div
          style={{
            filter: `brightness(${brightness / 100}) contrast(${
              contrast / 100
            })`,
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
