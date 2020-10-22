import React from "react"
import ProductCard from "./ProductCard"
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
                    {/* {this.props.products.map((product) => {
                        return <ProductCard product = {product}/>
                    })} */}
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </ProductsGrid>
               
            </ProductsCont>
           /* <div className={"products-container"}>
                
                <div>
                img src={"https://picsum.photos/200/150/?a=1"}
                item={"item1"}
                price={ "R$00.00"}
                </div>

                <div>
                img src={"https://picsum.photos/200/150/?a=2"}
                item={"item2"}
                price={ "R$00.00"}
                </div>

                <div>
                img src={"https://picsum.photos/200/150/?a=3"}
                item={"item3"}
                price={ "R$00.00"}
                </div>

                <div>>
                img src={"https://picsum.photos/200/150/?a=4"}
                item={"item4"}
                price={ "R$00.00"}
                </div>>

                <div>
                img src={"https://picsum.photos/200/150/?a=5"}
                item={"item5"}
                price={ "R$00.00"}
                </div>

                <div>
                img src={"https://picsum.photos/200/150/?a=6"}
                item={"item6"}
                price={ "R$00.00"}
                </div>

                <div>
                img src={"https://picsum.photos/200/150/?a=7"}
                item={"item7"}
                price={ "R$00.00"}
                </div>

                <div>
                img src={"https://picsum.photos/200/150/?a=8"}
                item={"item8"}
                price={ "R$00.00"}
                </div>


                




            </div>
*/



        ) //fechamento return 
    } //fechamento render
}// fechamento class

export default Products



