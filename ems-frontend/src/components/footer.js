import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Footer() {
  return (
    <Container style={{ marginTop: '20px', padding: '20px', textAlign: 'center', backgroundColor: '#f1f1f1' }}>
      <Typography variant="body2" color="text.secondary">
        © 2025 Event Management System. All rights reserved.
      </Typography>
    </Container>
  );
}

export default Footer;