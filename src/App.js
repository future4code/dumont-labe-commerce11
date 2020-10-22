import React from 'react';
import styled from 'styled-components';

import Filter from './components/Filter';
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`

class App extends React.Component {
  render () {
    return (
      <AppContainer>
        <Filter />
        <Products />
        <ShoppingCart />
      </AppContainer>
    )
  }
}

export default App;

