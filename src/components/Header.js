import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './Header.css';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id='header-container' position="static">
        <Toolbar>
          
            <img alt="//" src='https://centarnit.com/wp-content/uploads/2020/10/klaster-logo-final-1.png'></img>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
