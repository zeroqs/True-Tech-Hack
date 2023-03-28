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
  SetSetting,
  useBlur,
  useBrightness,
  useConfig,
  useContrast,
  useSaturation,
} from '../../context/ControllersContext.jsx'
import Typography from '@mui/material/Typography'

const Controllers = () => {
  const { brightness, setBrightness } = useBrightness()
  const { contrast, setContrast } = useContrast()
  const { saturation, setSaturation } = useSaturation()
  const { blur, setBlur } = useBlur()
  const { configType } = useConfig()
  const [config, setConfig] = React.useState({})

  const handleBrightnees = (value) => {
    setBrightness(value)
    setConfig({
      ...config,
      brightness: value,
    })
  }
  const handleContrast = (value) => {
    setContrast(value)
    setConfig({
      ...config,
      contrast: value,
    })
  }
  const handleSaturation = (value) => {
    setSaturation(value)
    setConfig({
      ...config,
      saturation: value,
    })
  }
  const handleBlur = (value) => {
    setBlur(value)
    setConfig({
      ...config,
      blur: value,
    })
  }

  React.useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(configType))
    if (storage) {
      setConfig(storage)
    } else {
      setConfig(false)
    }
  }, [configType])
  return (
    <>
      <Typography
        id="modal-modal-title"
        textAlign="center"
        variant="h6"
        component="h2"
      >
        Яркость
      </Typography>
      <Stack
        width={'100%'}
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        title={'Яркость'}
      >
        <LightModeRoundedIcon />
        <Slider
          size="medium"
          value={config?.brightness ?? brightness}
          onChange={(e) => handleBrightnees(e.target.value)}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <LightModeOutlinedIcon />
      </Stack>
      <Typography
        id="modal-modal-title"
        textAlign="center"
        variant="h6"
        component="h2"
      >
        Контрастность
      </Typography>
      <Stack
        width={'100%'}
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        title={'Контрастность'}
      >
        <ContrastTwoToneIcon />
        <Slider
          size="medium"
          value={config?.contrast ?? contrast}
          onChange={(e) => handleContrast(e.target.value)}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <ContrastTwoToneIcon />
      </Stack>
      <Typography
        id="modal-modal-title"
        textAlign="center"
        variant="h6"
        component="h2"
      >
        Насыщенность
      </Typography>
      <Stack
        width={'100%'}
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        title={'Насыщенность'}
      >
        <BrightnessLowIcon />
        <Slider
          size="medium"
          value={config?.saturation ?? saturation}
          onChange={(e) => handleSaturation(e.target.value)}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Brightness6Icon />
      </Stack>
      <Typography
        id="modal-modal-title"
        textAlign="center"
        variant="h6"
        component="h2"
      >
        Резкость
      </Typography>
      <Stack
        width={'100%'}
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        title={'Резкость'}
      >
        <BlurOffIcon />
        <Slider
          size="medium"
          value={config?.blur ?? blur}
          onChange={(e) => handleBlur(e.target.value)}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <BlurOnIcon />
      </Stack>
    </>
  )
}

export default Controllers
