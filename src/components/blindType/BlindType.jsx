import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { useBlind, useConfig } from '../../context/ControllersContext.jsx'

export default function BlindType() {
  const { setBlindType } = useBlind()
  const { configType } = useConfig()
  const storage = JSON.parse(localStorage.getItem(configType))

  const handleChange = (value) => {
    setBlindType(storage?.blindType)
  }
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Вид дальтонизма
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => handleChange(e.target.value)}
      >
        <FormControlLabel
          value="Protanopia"
          control={<Radio />}
          label="Протанопия"
        />
        <FormControlLabel
          value="Deuteranopia"
          control={<Radio />}
          label="Дейтеранопия"
        />
        <FormControlLabel
          value="Tritanopia"
          control={<Radio />}
          label="Тританопия"
        />
      </RadioGroup>
    </FormControl>
  )
}
