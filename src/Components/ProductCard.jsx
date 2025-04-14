import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export const ProductCard = ({ title, price, image }) => {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: '12px',
        border: '2px solid orange',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia
        component='img'
        image={image}
        alt={title}
        sx={{
          width: '100%',
          height: 180,
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <CardContent>
        <Typography
          variant='subtitle1'
          sx={{ fontWeight: 'bold', color: 'orange' }}
        >
          {title}
        </Typography>
        <Typography
          variant='h6'
          sx={{ textAlign: 'end' }}
        >{`$ ${price.toLocaleString('es-AR')} ,00`}</Typography>
        <Box sx={{ mt: 1 }}>
          <Button
            fullWidth
            variant='outlined'
            sx={{
              color: 'orange',
              border: '1px solid orange',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '  orange',
                color: 'white',
              },
            }}
          >
            Agregar al Carrito
          </Button>
          <Button
            fullWidth
            variant='contained'
            sx={{
              mt: 1,
              backgroundColor: 'orange',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: ' white',
                color: 'orange',
              },
            }}
          >
            Comprar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
