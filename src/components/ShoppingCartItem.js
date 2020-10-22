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
export class ShoppingCartItem extends React.Component{
render () {
    return (
        <Item>
           <p>5x</p>
           <p>Produto</p>
           <button>Remover</button>
        </Item>
    )//fechamento return do render
}//fechamento render
} //fechamento class