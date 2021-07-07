import React from 'react';
import styled from 'styled-components';
import Filter from './components/Filter';
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart';
import mercury from './img/mercury.jpg';
import venus from './img/venus.jpg';
import mars from './img/mars.jpg';
import jupiter from './img/jupiter.jpg';
import saturn from './img/saturn.png';
import uranus from './img/uranus.jpg';
import neptune from './img/neptune.jpg';
import pluto from './img/pluto.jpeg';
import space from './img/space.jpg'




const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-image: linear-gradient(to bottom, #020a16, #010c20, #020e2a, #040e33, #0b0d3b);
  color: white;
`

const products = [
  {
    id: 1,
    image: mercury,
    name: 'Mercúrio',
    price: 1000000,
    quantity: 0
  },
  {
    id: 2,
    image: venus,
    name: 'Vênus',
    price: 1000000,
    quantity:0
  },
  {
    id: 3,
    image: mars,
    name: 'Marte',
    price: 1000000,
    quantity: 0
  },
  {
    id: 4,
    image: jupiter,
    name: 'Júpiter',
    price: 1500000,
    quantity: 0
  },
  {
    id: 5,
    image: saturn,
    name: 'Saturno',
    price: 2000000,
    quantity: 0
  },
  {
    id: 6,
    image: uranus,
    name: 'Urano',
    price: 2500000,
    quantity: 0
  },
  {
    id: 7,
    image: neptune,
    name: 'Netuno',
    price: 3000000,
    quantity: 0
  },
  {
    id: 8,
    image: pluto,
    name: 'Plutão',
    price: 4000000,
    quantity: 0
  },
]
const newProduct= [...products]



class App extends React.Component {
  state = {
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsList: products,
    sort: "increasing",
    productsInCart: [],
    totalValue: 0,


  }


  onChangeMinFilter = (event) => {
    this.setState({
      minFilter: event.target.value
    })
  }

  onChangeMaxFilter = (event) => {
    this.setState({
      maxFilter: event.target.value
    })
  }

  onChangeNameFilter = (event) => {
    this.setState({
      nameFilter: event.target.value
    })
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
    
        .sort((a, b) => this.state.sort === "increasing" ? a.value - b.price : b.price - a.price)    
        
        return (
          filteredList
        )
   // this.setState({ productsList: filteredList })
    //console.log(this.state.sort)
}


onChangeSort = (event) => {
  console.log("teste")
  this.setState({
    sort: event.target.value
  })
}
 addProduct = (newId,newImage,newName,newPrice) => {
   newProduct.map((product) => {
     if (newId === product.id){
      product.quantity +=1
      this.setState({
        totalValue: product.price + this.state.totalValue
      })
     }
     let newCart = newProduct.filter(function(param){
       return param.quantity > 0;
     })
     this.setState({
       productsInCart: newCart
     })
   })
 }
removeCart = (cart) => {
  newProduct.map((product)=>{
    if(cart.id === product.id){
      product.quantity -=1
      this.setState({
        totalValue:this.state.totalValue - cart.price
      })
    }
    let newCart = newProduct.filter(function(param){
      return param.quantity > 0;
    })
    this.setState({
      productsInCart: newCart
    })
    
  })
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
          products={this.getFilteredAndOrderedList()}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter} 
          sort={this.state.sort}
          onChangeSort={this.onChangeSort}
          addProduct = {this.addProduct}
          totalValue={this.props.totalValue}
          cart={this.state.productsInCart}
        />

        
        <ShoppingCart products = {this.state.products} 
          cart={this.state.productsInCart} 
          removeCart={this.removeCart}
          totalValue={this.state.totalValue}/>

      </AppContainer>
    )
  }  
  
  
}

export default App;

