import './App.css'
import ReactPlayer from 'react-player'
import React from 'react'
import { Slider } from '@mui/material'

function App() {
  const [brightness, setBrightness] = React.useState(100)
  const [contrast, setContrast] = React.useState(100)
  const onChangeBrightness = (e) => {
    setBrightness(e.target.value)
  }
  const onChangeContrast = (e) => {
    setContrast(e.target.value)
  }
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
        <Slider
          size="medium"
          value={brightness}
          onChange={onChangeBrightness}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider
          size="medium"
          value={contrast}
          onChange={onChangeContrast}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  )
}

export default App
