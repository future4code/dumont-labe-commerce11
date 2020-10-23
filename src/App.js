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
    name: 'Produto 1',
    price: 100
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/200?a=2',
    name: 'Produto 2',
    price: 100
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/200?a=3',
    name: 'Produto 3',
    price: 100
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/200?a=4',
    name: 'Produto 4',
    price: 100
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/200?a=5',
    name: 'Produto 5',
    price: 100
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/200?a=6',
    name: 'Produto 6',
    price: 100
  },
  {
    id: 7,
    image: 'https://picsum.photos/200/200?a=7',
    name: 'Produto 7',
    price: 100
  },
  {
    id: 8,
    image: 'https://picsum.photos/200/200?a=8',
    name: 'Produto 8',
    price: 100
  },
]
class App extends React.Component{
  state = {
    minFilter: '',
    maxFilter: '',
    nameFilter: '',


    productsInCart: [
      {
        id: 6,
        image: 'https://picsum.photos/200/200?a=6',
        name: 'Produto 6',
        price: 100,
        quantity: 1
      },
      {
        id: 7,
        image: 'https://picsum.photos/200/200?a=7',
        name: 'Produto 7',
        price: 100,
        quantity: 1
      },
      {
        id: 8,
        image: 'https://picsum.photos/200/200?a=8',
        name: 'Produto 8',
        price: 100,
        quantity: 1
      },
    ]
  }
    render(){
      return (
        <AppContainer>
          <Filter 
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            />
          <Products products={products} 
            />
          <ShoppingCart productsInCart = {this.state.productsInCart} />
        </AppContainer>
      )
    }
}
export default App;