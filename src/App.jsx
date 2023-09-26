import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useRouteError } from 'react-router-dom';
import {
  About,
  Card,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
  
} from "./pages";
import LandingError from './components/LandingError';
import { loader as LandingLoader } from './pages/Landing';
import {loader as SingleLoader} from './pages/SingleProduct';
import {loader as ProductsLoader} from './pages/Products'
// Sizning routing konfiguratsiyangiz
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Landing />} errorElement={<LandingError/>} loader={LandingLoader}/>
      <Route path="about" element={<About />} />
      <Route path="orders" element={<Orders />} />
      <Route path="products" element={<Products />} loader={ProductsLoader} />
      <Route path="products/:id" element={<SingleProduct />} loader={SingleLoader}/>
      <Route path="cart" element={<Card /> } />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Error />} errorElement={<Error/>}/>
    </Route>
  )
);

function App() {
  

  return <RouterProvider router={routes} />;
}

export default App;
