import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <img src={require('./logo.svg').default} alt="logo" style={{ height: '50px', width: 'auto', marginRight: '20px' }} />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Event Management System
          </Typography>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Event 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of Event 1 conducted by EMS system.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Event 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of Event 2 conducted by EMS system.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Event 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of Event 3 conducted by EMS system.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
