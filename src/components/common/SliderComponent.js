import * as React from 'react';
// import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

const SliderComponent = ({def, min, max, step, onChange, value}) => {
  return (
    <>
        <Typography variant='subtitle2'>Home Value</Typography>
        <Typography variant='h5'>$ {onChange}</Typography>
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
        <Typography></Typography>
    </>
      
  );
}

export default SliderComponent;