import React from 'react'
import { Button, Grid, IconButton, Slider, Typography } from '@mui/material'
import { Pause, PlayArrow, VolumeOff, VolumeUp } from '@mui/icons-material'
import '../../assets/PlayerControls.css'
import TuneIcon from '@mui/icons-material/Tune'
import CustomModal from '../modal/CustomModal.jsx'
import BasicModal from '../modal/CustomModal.jsx'
import BlindType from '../blindType/BlindType'

const useStyles = {
  controlsWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  controlIcons: {
    color: '#777',
    fontSize: 50,
    transform: 'scale(0.9)',
    '&:hover': {
      color: '#fff',
      transform: 'scale(1)',
    },
  },

  bottomIcons: {
    color: '#999',
    '&:hover': {
      color: '#fff',
    },
  },
  volumeSlider: {
    width: 100,
  },
}

export default ({
  changePlayMode,
  play,
  changeVolume,
  volume,
  progress,
  handleSeekChange,
  onSeekMouseDown,
  handleSeekMouseUp,
}) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div className="controlsWrapper">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        style={{ padding: 16 }}
      >
        <Grid item>
          <Typography variant="h5" style={{ color: '#fff' }}></Typography>
        </Grid>

        <Grid item>
          <Button
            onClick={handleOpen}
            variant="contained"
            color="primary"
            startIcon={<TuneIcon />}
          >
            Настройки
          </Button>
          <BasicModal modal={open} handleClose={handleClose}>
            {' '}
            <BlindType />
          </BasicModal>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          onClick={changePlayMode}
          sx={useStyles.controlIcons}
          aria-label="reqind"
        >
          {play ? (
            <Pause fontSize="inherit" />
          ) : (
            <PlayArrow fontSize="inherit" />
          )}
        </IconButton>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: 16 }}
      >
        <Grid item xs={12}>
          <Slider
            sx={{
              root: {
                height: 8,
              },
              thumb: {
                height: 24,
                width: 24,
                backgroundColor: '#fff',
                border: '2px solid currentColor',
                marginTop: -8,
                marginLeft: -12,
                '&:focus, &:hover, &$active': {
                  boxShadow: 'inherit',
                },
              },
              active: {},
              valueLabel: {
                left: 'calc(-50% + 4px)',
              },
              track: {
                height: 8,
                borderRadius: 4,
              },
              rail: {
                height: 8,
                borderRadius: 4,
              },
            }}
            min={0}
            max={100}
            value={progress * 100 || 0}
            onChange={handleSeekChange}
            onChangeCommitted={handleSeekMouseUp}
            onMouseDown={onSeekMouseDown}
          />
        </Grid>

        <Grid item>
          <Grid container alignItems="center" direction="row">
            <IconButton onClick={changePlayMode} sx={useStyles.bottomIcons}>
              {play ? (
                <Pause fontSize="large" />
              ) : (
                <PlayArrow fontSize="large" />
              )}
            </IconButton>

            <IconButton sx={useStyles.bottomIcons}>
              {volume ? (
                <VolumeUp onClick={() => changeVolume(0)} fontSize="large" />
              ) : (
                <VolumeOff onClick={() => changeVolume(100)} fontSize="large" />
              )}
            </IconButton>

            <Slider
              min={0}
              max={100}
              value={volume * 100}
              sx={useStyles.volumeSlider}
              onChange={(e) => changeVolume(e.target.value)}
            />

            <Button variant="text" style={{ color: '#fff', marginLeft: 16 }}>
              <Typography>05:05</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
