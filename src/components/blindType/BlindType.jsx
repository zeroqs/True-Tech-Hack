import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function BlindType() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Вид дальтонизма</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="protanopia" control={<Radio />} label="Протанопия" />
        <FormControlLabel value="Deuteranopia" control={<Radio />} label="Дейтеранопия" />
        <FormControlLabel value="Tritanopia" control={<Radio />} label="Тританопия" />
      </RadioGroup>
    </FormControl>
  );
}