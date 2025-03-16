import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={require('../logo.svg').default} alt="logo" style={{ height: '50px', width: 'auto', marginRight: '20px' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Event Management System
        </Typography>
        <Button color="inherit" component={Link} to="/about">About Us</Button>
        <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        <Button color="inherit" component={Link} to="/signup">Sign Up/Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;