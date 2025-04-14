import { Container, Grid } from '@mui/material';
import { products } from './data/products';
import { Header } from './Components/Header';
import { Banner } from './Components/Banner';
import { FeatureCards } from './Components/FeatureCards';
import { ProductCard } from './Components/ProductCard';

function App() {
  return (
    <Container maxWidth={false}>
      <Header />
      <Banner />
      <FeatureCards />
      <Grid
        container
        spacing={3}
        sx={{ mt: 10, px: 2, justifyContent: "space-around" }}
      >
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
