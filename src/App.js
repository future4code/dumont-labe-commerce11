import React from 'react';
import styled from 'styled-components';

import Filter from './components/Filter';
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>HELLO WORLD!</p>
        <Filter />
        <Products />
        <ShoppingCart />
        <button></button>
      </div>
    )
  }
}

export default App;

