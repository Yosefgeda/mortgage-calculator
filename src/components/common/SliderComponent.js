import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SliderComponent = ({def, min, max}) => {
  return (
    <Box sx={{ width: 400 }}>
      <Slider 
        defaultValue={def} 
        min={min} max={max} 
        aria-label="Default" 
        valueLabelDisplay="auto" 
        step={10}
        marks
      />
    </Box>
  );
}

export default SliderComponent;