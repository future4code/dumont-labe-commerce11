import React from 'react';
import styled from 'styled-components';
import { ShoppingItem } from './ShoppingItem';

const ShoppingCartContainer = styled.div`
    border: 1px solid black;
`;

const CartlistContainer = styled.div`
    display: grid; 
    gap: 4px;

`


class ShoppingCart extends React.Component {
    render() {
        return (
            <ShoppingCartContainer>
                <h3>Carrinho: </h3>
                <ShoppingItem/>
            </ShoppingCartContainer>
        )
    }
}

export default ShoppingCart