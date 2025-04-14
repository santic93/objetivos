import { Box, Card, Grid, Paper, Typography } from '@mui/material';

const features = [
  {
    title: 'Proba el Formulario de Pago',
    description: 'Integra y probá nuestro formulario de pago incrustado',
  },
  {
    title: 'Personalizá el Botón de Pago',
    description:
      'Ajustá el texto y color del botón de pago según tus necesidades',
  },
  {
    title: 'Validá tus tarjetas',
    description: 'Comprobá cómo funciona la validación automática de BIN',
  },
];
export const FeatureCards = () => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent='center'
      sx={{
        mt: 3,
      }}
    >
      {features.map((f) => (
        <Grid item xs={12} sm={6} md={4} key={f.title} size={4}>
          <Box
            elevation={2}
            sx={{
              p: 2,
              border: '2px solid orange',
              marginBottom: '10px',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: '  white',
              },
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ fontWeight: 'bold', color: 'orange' }}
            >
              {f.title}
            </Typography>
            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
              {f.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
