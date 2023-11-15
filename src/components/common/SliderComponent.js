import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = ({ def, min, max, step, value, lable, unit, amount, onChange }) => {
  return (
    <Stack my={1}>
        <Stack gap={0}>
            <Typography variant='subtitle2'>{lable}</Typography>
            <Typography variant='h5'>{unit} {amount}</Typography>
        </Stack>
    
        <Slider 
            defaultValue={def} 
            min={min} 
            max={max} 
            aria-label="Default" 
            valueLabelDisplay="auto"
            onChange={onChange}
            value={value}
            marks
            step={step}
        />
        <Stack direction="row" justifyContent="space-between">
            <Typography variant='caption' color="text.secondary">{unit} {min}</Typography>
            <Typography variant='caption' color="text.secondary">{unit} {max}</Typography>
        </Stack>
    </Stack>
      
  );
}

export default SliderComponent;