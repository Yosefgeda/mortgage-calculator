import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SliderComponent = () => {
  return (
    <Box sx={{ width: 400 }}>
      <Slider defaultValue={150} min={100} max={300} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}

export default SliderComponent;