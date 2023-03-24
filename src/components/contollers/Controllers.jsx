import React from 'react'
import { Slider, Stack } from '@mui/material'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded.js'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined.js'
import ContrastTwoToneIcon from '@mui/icons-material/ContrastTwoTone.js'
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow'
import Brightness6Icon from '@mui/icons-material/Brightness6'
import BlurOnIcon from '@mui/icons-material/BlurOn'
import BlurOffIcon from '@mui/icons-material/BlurOff'
import {
  useBlur,
  useBrightness,
  useContrast,
  useSaturation,
} from '../../context/ControllersContext.jsx'

const Controllers = () => {
  const { brightness, setBrightness } = useBrightness()
  const { contrast, setContrast } = useContrast()
  const { saturation, setSaturation } = useSaturation()
  const { blur, setBlur } = useBlur()
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        title={'Яркость'}
      >
        <LightModeRoundedIcon />
        <Slider
          size="medium"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <LightModeOutlinedIcon />
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        title={'Контрастность'}
      >
        <ContrastTwoToneIcon />
        <Slider
          size="medium"
          value={contrast}
          onChange={(e) => setContrast(e.target.value)}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <ContrastTwoToneIcon />
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        title={'Насыщенность'}
      >
        <BrightnessLowIcon />
        <Slider
          size="medium"
          value={saturation}
          onChange={(e) => setSaturation(e.target.value)}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Brightness6Icon />
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        title={'Резкость'}
      >
        <BlurOffIcon />
        <Slider
          size="medium"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <BlurOnIcon />
      </Stack>
    </>
  )
}

export default Controllers
