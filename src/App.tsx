import React from 'react';
import Product from './components/Product';
import {products} from "./data/Products"

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5" >
     sdfsdf
     <Product product={products[0]} />
     <Product product={products[1]} />
    </div>
  );
}

export default App;
