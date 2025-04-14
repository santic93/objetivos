import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export const Header = () => {
  return (
    <AppBar
      // position='fixed'
      sx={{
        backgroundColor: '#ffa726',
      }}
    >
      <Toolbar>
        <MonetizationOnIcon fontSize='large' />
        <Typography
          variant='h4'
          sx={{ flexGrow: 1, fontWeight: 'bold', marginLeft: '15px' }}
        >
          Client Store
        </Typography>
        <IconButton color='inherit'>
          <ShoppingCartIcon fontSize='large' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
