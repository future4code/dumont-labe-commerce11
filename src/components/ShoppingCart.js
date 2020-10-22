import React from 'react';
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
    border: 1px solid black;
`

class ShoppingCart extends React.Component {
    render() {
        return (
            <ShoppingCartContainer>
                ESSE É O CARRINHO DE COMPRAS
            </ShoppingCartContainer>
        )
    }
}

export default ShoppingCart