import React from "react";
import styled from 'styled-components';

const Item = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 6px;
    align-items: center;
    p {
        margin: 0
    }
`


class ShoppingCartItem extends React.Component{
render () {
    return (
        <Item>
            {this.props.cart.map((product)=>{
                return(<Item>
                
                        <img src = {product.image}/>
                        <h4>{product.quantity}:{product.name}:R${product.price},00</h4>
                        <button onClick={() => this.props.removeCart(product)}>Remover</button>
                    </Item>
            )})}
        </Item>
            
    )//fechamento return do render
}//fechamento render
} //fechamento class
export default ShoppingCartItem
