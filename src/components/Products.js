import React from "react"
import ProductCard from "./ProductCard"

class Products extends React.Component {
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
            <div className={"products-container"}>
                
                <ProductCard
                img src={"https://picsum.photos/200/150/?a=1"}
                item={"item1"}
                price={ "R$00.00"}
                />

                <ProductCard
                img src={"https://picsum.photos/200/150/?a=2"}
                item={"item2"}
                price={ "R$00.00"}
                />

                <ProductCard
                img src={"https://picsum.photos/200/150/?a=3"}
                item={"item3"}
                price={ "R$00.00"}
                />

                <ProductCard
                img src={"https://picsum.photos/200/150/?a=4"}
                item={"item4"}
                price={ "R$00.00"}
                />

                <ProductCard
                img src={"https://picsum.photos/200/150/?a=5"}
                item={"item5"}
                price={ "R$00.00"}
                />

                <ProductCard
                img src={"https://picsum.photos/200/150/?a=6"}
                item={"item6"}
                price={ "R$00.00"}
                />

                <ProductCard
                img src={"https://picsum.photos/200/150/?a=7"}
                item={"item7"}
                price={ "R$00.00"}
                />

                <ProductCard
                img src={"https://picsum.photos/200/150/?a=8"}
                item={"item8"}
                price={ "R$00.00"}
                />


                <select value={this.state.filter} onChange={this.onChangeFilter} >
                    <option value="">Nenhum</option>
                    <option value="lowestprice">Menor preço</option>
                    <option value="biggestprice">Maior preço</option>
                </select>




            </div>




        ) //fechamento return 
    } //fechamento render
}// fechamento class

export default Products