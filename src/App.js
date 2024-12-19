import React from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import Count from './components/Count';

// Sample products
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
  { id: 4, name: 'Product 4', price: 40 },
];

function App() {
  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col-9" style={{'padding':'20px 20px 20px 20px',}}>
        <h2 className="text-primary">Cart Application</h2>
        </div>
        <div className="col-3 text-end" style={{'padding':'20px 30px 20px 20px',}}>
        <h3><Count /></h3>
        </div>
      </div>
      
      <div className="row">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Cart />
      </div>
    </div>
  );
}

export default App;
