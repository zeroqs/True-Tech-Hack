import React from 'react'
import { Slider, Stack } from '@mui/material'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded.js'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined.js'
import ContrastTwoToneIcon from '@mui/icons-material/ContrastTwoTone.js'
import {
  useBrightness,
  useContrast,
} from '../../context/ControllersContext.jsx'

const Controllers = () => {
  const { brightness, setBrightness } = useBrightness()
  const { contrast, setContrast } = useContrast()
  return (
    <>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
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
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
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
    </>
  )
}

export default Controllers
