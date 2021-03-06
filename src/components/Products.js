import React from "react"
import ProductCard from './ProductCard'
import styled from "styled-components"

const ProductsCont = styled.div`
    
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 10px;
    padding: 10px;
`

export class Products extends React.Component {


    
       render () {
        return (
            <ProductsCont>
                <Header>
                    <p>Quantidade de produtos: {this.props.products.length}</p>
                    <select  onChange={this.props.onChangeSort} >
                        <option value="increasing">Menor preço</option>
                        <option value="decreasing">Maior preço</option>
                    </select>
                </Header>

                <ProductsGrid>
                    {this.props.products.map((product) => {
                        return <ProductCard product = {product}
                        cart={this.props.cart}
                        addProduct={this.props.addProduct}
                        totalValue={this.props.totalValue}
                        />
                    })}
                </ProductsGrid>
               
            </ProductsCont>
           
        ) //fechamento return 
    } //fechamento render
}// fechamento class

export default Products



