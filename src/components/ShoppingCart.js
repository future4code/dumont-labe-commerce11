import React from 'react';
import styled from 'styled-components';
import ShoppingCartItem from './ShoppingCartItem';


const ShoppingCartContainer = styled.div`
    padding: 8px;
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
                <CartlistContainer>
                    <ShoppingCartItem
                        cart = {this.props.cart}
                        removeCart = {this.props.removeCart}
                    />
                </CartlistContainer>    
                <div>
                    <p>Valor total: R${this.props.totalValue},00</p>
                </div>
            </ShoppingCartContainer>
        )
    }
}
export default ShoppingCart