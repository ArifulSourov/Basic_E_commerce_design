import './App.css';
import Home from './components/Home'
import Tagline from './components/Tagline'
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoProducts from './components/DemoProducts';
import FeaturedProducts from './components/FeaturedProducts';
import Divider from '@material-ui/core/Divider';
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/Checkout`} component={CheckoutPage} />
          <Route path={`${process.env.PUBLIC_URL}/Details`} component={DetailsPage} />
          <Route path={`${process.env.PUBLIC_URL}/Cart`} component={CartPage} />
          <Route path={`${process.env.PUBLIC_URL}`} component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const CheckoutPage = () => (
  <div>
    <Home />
    <br />
      <br /><br />
      <br />
      <br />
      <Checkout />
  </div>
)

const CartPage = () => (
  <div>
    <Home />
    <br />
      <br />
      <br /><br />
      <br />
      <br />
    <Cart />
  </div>
);

const DetailsPage = () => (
  <div>
    <Home />
    <br />
      <br />
      <br /><br />
      <br />
      <br />
      <br />
      <br />
      <br />
    <ProductDetails />
  </div>
);

const HomePage = () => (
  <div>
      <Home />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Tagline />
      <br />
      <br />
      <br />
      <DemoProducts />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <FeaturedProducts />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <Newsletter />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <Products />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <About />
      <br />
      <br />
      <br />
      <Divider />
      <Footer />

  </div>
);

export default App;
