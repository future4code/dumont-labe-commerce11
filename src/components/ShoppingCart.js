import React from 'react';
import styled from 'styled-components';
import ShoppingCartItem from './ShoppingCartItem';


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
                <ShoppingCartItem
                    cart = {this.props.cart}
                    removeCart = {this.props.removeCart}
                />
                <p>Valor total: R${this.props.totaValue},00</p>
            </ShoppingCartContainer>
        )
    }
}
export default ShoppingCart