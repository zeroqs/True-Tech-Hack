import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useConfig } from '../../context/ControllersContext.jsx'

export default function SelectConfig() {
  const [state, setState] = React.useState('')
  const { configType, setConfigType } = useConfig()
  const handleChange = (value) => {
    setConfigType(value)
    setState(value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
      <InputLabel id="demo-select-small">Конфигурация</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={configType || state}
        label="Конфигурация"
        onChange={(e) => handleChange(e.target.value)}
      >
        <MenuItem value={'first'}>Конфигурация №1</MenuItem>
        <MenuItem value={'second'}>Конфигурация №2</MenuItem>
        <MenuItem value={'third'}>Конфигурация №3</MenuItem>
      </Select>
    </FormControl>
  )
}
