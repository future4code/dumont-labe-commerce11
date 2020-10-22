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
    state= {
        filter: ""
    }
    
    onChangeFilter = (event) => {
        this.setState({
            filter: event.target.value
        })
    }


    render () {
        return (
            <ProductsCont>
                <Header>
                    <p>Quantidade de produtos: 8</p>
                    <select value={this.state.filter} onChange={this.onChangeFilter} >
                        <option value="">Nenhum</option>
                        <option value="lowestprice">Menor preço</option>
                        <option value="biggestprice">Maior preço</option>
                    </select>
                </Header>

                <ProductsGrid>
                    {this.props.products.map((product) => {
                        return <ProductCard product = {product}/>
                    })}
                    
                </ProductsGrid>
               
            </ProductsCont>
           
        ) //fechamento return 
    } //fechamento render
}// fechamento class

export default Products



