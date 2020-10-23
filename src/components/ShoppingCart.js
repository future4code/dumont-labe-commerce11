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
    getTotalValue = () => {
        let totalValue = 0
        for (let product of this.props.productsInCart){
            totalValue += product.price * product.quantity
        }
        return totalValue
    }
    render() {
        return (
            <ShoppingCartContainer>
                <h3>Carrinho: </h3>
                <CartlistContainer>
                    {this.props.productsInCart.map((product) => {
                        return <ShoppingCartItem cartItem = {product}/>
                    })}
                </CartlistContainer>
                <p>Valor total: R${this.getTotalValue()},00</p>
            </ShoppingCartContainer>
        )
    }
}
export default ShoppingCart