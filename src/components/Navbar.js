import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container width="xl">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Mortgage Calculator
                </Typography>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Navbar