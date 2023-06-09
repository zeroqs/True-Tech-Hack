import React from 'react'
import { Button, Grid, IconButton, Slider, Typography } from '@mui/material'
import { Pause, PlayArrow, VolumeOff, VolumeUp } from '@mui/icons-material'
import '../../assets/PlayerControls.css'

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
  isButtonSkip,
}) => {
  return (
    <div>
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
            {isButtonSkip ? (
              <Button variant="contained" color="warning">
                Пропуск сцены
              </Button>
            ) : null}
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
                  <VolumeOff
                    onClick={() => changeVolume(100)}
                    fontSize="large"
                  />
                )}
              </IconButton>

              <Slider
                min={0}
                max={100}
                value={volume * 100}
                sx={useStyles.volumeSlider}
                onChange={(e) => changeVolume(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
