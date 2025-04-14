import { Box, Paper, Typography } from '@mui/material';

export const Banner = () => {
  return (
    <Paper
      sx={{ mt: 20, p: 2, border: '2px solid orange',   borderRadius: '12px', }}
      
    >
      <Typography variant='h4' sx={{ color: 'orange' }}>
        Bienvenido a <strong>Client Store</strong>
      </Typography>
      <Typography variant='h6' sx={{ mt: 1 }}>
        Explora nuestro sitio de ejemplo y probá las funcionalidades de pago.
      </Typography>
    </Paper>
  );
};
