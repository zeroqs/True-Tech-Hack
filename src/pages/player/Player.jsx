import ReactPlayer from 'react-player'
import React from 'react'
import Controllers from '../../components/contollers/Controllers.jsx'
import {
  useBlur,
  useBrightness,
  useContrast,
  useSaturation,
} from '../../context/ControllersContext.jsx'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import PlayerControls from '../../components/contollers/PlayerControls.jsx'
import video from '../../assets/38_serie_Pockemon_cut.mp4'

const Player = () => {
  const { brightness } = useBrightness()
  const { contrast } = useContrast()
  const { saturation } = useSaturation()
  const { blur } = useBlur()
  const [play, setPlay] = React.useState(false)
  const [volume, setVolume] = React.useState(1)
  const [progress, setProgress] = React.useState({})
  const [seeking, setSeeking] = React.useState(false)
  const playerRef = React.useRef(null)

  const changePlayMode = () => {
    setPlay(!play)
  }
  const changeVolume = (value) => {
    setVolume(value / 100)
  }

  const handleSeekChange = (e, newValue) => {
    setProgress({ ...progress, played: parseFloat(e.target.value / 100) })
    if (!seeking) {
      setProgress({ ...progress, played: parseFloat(newValue / 100) })
    }
  }

  const onSeekMouseDown = () => {
    setSeeking(true)
  }

  const handleSeekMouseUp = (e, newValue) => {
    setSeeking(false)
    playerRef.current.seekTo(parseFloat(newValue / 100))
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">React Video Player</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <div
          style={{
            position: 'relative',
            height: '500px',
            filter: `brightness(${brightness / 100}) 
            contrast(${contrast / 100}) 
            saturate(${saturation / 100}) 
            blur(${blur}px)
            `,
          }}
        >
          <ReactPlayer
            ref={playerRef}
            width={'100%'}
            height={'100%'}
            url={video}
            playing={play}
            volume={volume}
            progressInterval={1000}
          />

          <PlayerControls
            changePlayMode={changePlayMode}
            play={play}
            changeVolume={changeVolume}
            volume={volume}
            progress={progress}
            handleSeekChange={handleSeekChange}
            onSeekMouseDown={onSeekMouseDown}
            handleSeekMouseUp={handleSeekMouseUp}
          />
        </div>
      </Container>
    </>
  )
}

export default Player
