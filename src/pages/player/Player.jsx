import ReactPlayer from 'react-player'
import React from 'react'

import {
  useBlur,
  useBrightness,
  useConfig,
  useContrast,
  useSaturation,
} from '../../context/ControllersContext.jsx'
import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'
import PlayerControls from '../../components/contollers/PlayerControls.jsx'
import TuneIcon from '@mui/icons-material/Tune.js'
import BasicModal from '../../components/modal/CustomModal.jsx'
import { Link } from 'react-router-dom'

const Player = ({ url }) => {
  const [play, setPlay] = React.useState(false)
  const [volume, setVolume] = React.useState(1)
  const [progress, setProgress] = React.useState({})
  const [seeking, setSeeking] = React.useState(false)
  const playerRef = React.useRef(null)
  const { configType } = useConfig()

  const { brightness, setBrightness } = useBrightness()
  const { contrast, setContrast } = useContrast()
  const { saturation, setSaturation } = useSaturation()
  const { blur, setBlur } = useBlur()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [storage, setStorage] = React.useState({})
  const [isButtonSkip, setIsButtonSkip] = React.useState(false)

  React.useEffect(() => {
    if (parseInt(progress.played * 100) === 25) {
      setIsButtonSkip(true)
    }
    if (parseInt(progress.played * 100) === 30) {
      playerRef.current.seekTo(parseFloat('41'))
      setIsButtonSkip(false)
    }
  }, [progress])

  React.useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(configType))
    if (storage) {
      setStorage(storage)
    }
  }, [configType])

  const changePlayMode = () => {
    setPlay(!play)
  }
  const changeVolume = (value) => {
    setVolume(value / 100)
  }

  const onProgress = (state) => {
    if (!seeking) {
      setProgress({ ...progress, played: state.played })
    }
  }

  const handleSeekChange = (state, newValue) => {
    setProgress({ ...progress, played: parseFloat(newValue / 100) })
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
          <Link
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
            }}
            to="/"
          >
            <Typography variant="h6">Code Wizards</Typography>
          </Link>
          <Grid>
            <Button
              onClick={handleOpen}
              variant="contained"
              color="warning"
              startIcon={<TuneIcon />}
            >
              Настройки
            </Button>
            <BasicModal modal={open} handleClose={handleClose} />
          </Grid>
          <Grid marginLeft={15}>
            <Link
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
              }}
              to="/safe-video"
            >
              <Button variant="contained" color="warning">
                Видео без опасной сцены с субтитрами ( демо )
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <div
          style={{
            position: 'relative',
            height: '500px',
            filter: `brightness(${storage?.brightness / 100 ?? brightness}) 
            contrast(${storage?.contrast / 100 ?? contrast}) 
            saturate(${storage?.saturation / 100 ?? saturation}) 
            blur(${storage?.blur}px)
            `,
          }}
        >
          <ReactPlayer
            ref={playerRef}
            width={'100%'}
            height={'100%'}
            url={url}
            playing={play}
            volume={volume}
            onProgress={onProgress}
          />

          <PlayerControls
            isButtonSkip={isButtonSkip}
            changePlayMode={changePlayMode}
            play={play}
            changeVolume={changeVolume}
            volume={volume}
            progress={progress.played}
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
