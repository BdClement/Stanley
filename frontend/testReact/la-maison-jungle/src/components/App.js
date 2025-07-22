// import logo from '../assets/logo.svg';
import React, {useState} from 'react';
import '../styles/App.css';
import Banner from "./Banner"
import Cart from "./Cart"
import ShoppingList from './ShoppingList'
import Footer from './Footer';

function App() {
  const [cart, updateCart] = useState([])
  return (<React.Fragment>
      <Banner />
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
