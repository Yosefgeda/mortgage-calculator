import * as React from 'react';
// import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = ({def, min, max, step, onChange, value, lable, unit, amount}) => {
  return (
    <>
        <Stack gap={1}>
            <Typography variant='subtitle2'>{lable}</Typography>
            <Typography variant='h5'>{unit} {amount}</Typography>
        </Stack>
    
        <Slider 
            defaultValue={def} 
            min={min} max={max} 
            aria-label="Default" 
            valueLabelDisplay="auto" 
            step={step}
            marks
            onChange={onChange}
            value={value}
        />
        <Stack direction="row" justifyContent="space-between">
            <Typography variant='caption' color="text.secondary">{unit} {min}</Typography>
            <Typography variant='caption' color="text.secondary">{unit} {max}</Typography>
        </Stack>
    </>
      
  );
}

export default SliderComponent;