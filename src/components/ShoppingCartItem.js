
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
           <p>{this.props.cartItem.quantity}</p>
           <p>{this.props.cartItem.name}</p>
           <button>Remover</button>
        </Item>
    )//fechamento return do render
}//fechamento render
} //fechamento class
export default ShoppingCartItem