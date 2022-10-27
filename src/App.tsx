import React from 'react';
import { Products } from './components/products/Products';
import {Cart} from './components/cart/Cart';
import './App.css';

function App() {
  return (
    <div className="container py-3">
      <main>
        <Products/>
        <Cart/>
      </main>
    </div>
  );
}

export default App;
