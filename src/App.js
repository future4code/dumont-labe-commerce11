import React from 'react';
import styled from 'styled-components';
import Filter from './components/Filter';
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart';


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

`

const products = [
  {
    id: 1,
    image: 'https://picsum.photos/200/200?a=1',
    item: 'Item 1',
    price: 100,
  }, 

  {
    id: 2,
    image: 'https://picsum.photos/200/200?a=2',
    item: 'Item 2',
    price: 200
  },

]

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

