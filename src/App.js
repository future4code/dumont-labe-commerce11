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
    price: 200
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/200?a=3',
    name: 'Produto 3',
    price: 300
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/200?a=4',
    name: 'Produto 4',
    price: 400
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/200?a=5',
    name: 'Produto 5',
    price: 500
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/200?a=6',
    name: 'Produto 6',
    price: 600
  },
  {
    id: 7,
    image: 'https://picsum.photos/200/200?a=7',
    name: 'Produto 7',
    price: 700
  },
  {
    id: 8,
    image: 'https://picsum.photos/200/200?a=8',
    name: 'Produto 8',
    price: 800
  },
]

class App extends React.Component {
  state = {
    minFilter: '100',
    maxFilter: '500',
    nameFilter: '',
    productsList: products,
    sort: "crescente"
  }


  

  

  componentDidMount() {
    this.getFilteredAndOrderedList()
  }

  getFilteredAndOrderedList = () => {
    const filteredList = products
        .filter((product) => {
          if (this.state.maxFilter) {
            return(product.price <= Number(this.state.maxFilter))
          } else {
            return true
          }
        })

        .filter((product) => {
          if (this.state.minFilter) {
            return(product.price >= Number(this.state.minFilter))
          } else {
            return true
          } 
        })

        .filter((product) => {
          if (this.state.nameFilter) {
            return(this.state.nameFilter && product.name.includes(this.state.nameFilter))
          } else {
            return true
          }
        })
    
        .sort((a, b) => this.state.sort === "crescente" ? a.price -b.price : b.price - a.price)    
    this.setState({ productsList: filteredList })
}




  render () {
    return (
      <AppContainer>
        <Filter
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeNameFilter={this.onChangeNameFilter}
        />
        <Products 
          products={this.state.productsList}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter} 
        />

        
        <ShoppingCart />
      </AppContainer>
    )
  }  
  
  
}

export default App;

