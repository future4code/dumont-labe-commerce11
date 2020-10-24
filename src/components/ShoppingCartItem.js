import React from "react";
import styled from 'styled-components';

const ItemContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px dashed black;
    
`
const Item = styled.div`
display:flex;
`

const InfoItem = styled.div`
display:flex;
flex-direction:column;
`
const CartImage = styled.img`
height:40px;
width:40px;
`


class ShoppingCartItem extends React.Component{
render () {
    return (
        <ItemContainer>
            {this.props.cart.map((product)=>{
                return(
                    <Item>
                        <InfoItem>
                            <CartImage src = {product.image}/>
                            <h4>{product.quantity} x {product.name}: R${product.price},00</h4>
                        </InfoItem>
                        <InfoItem>
                            <button onClick={() => this.props.removeCart(product)}>Remover</button>
                        </InfoItem>
                        
                    </Item>
                    
            )})}
        </ItemContainer>
            
    )//fechamento return do render
}//fechamento render
} //fechamento class
export default ShoppingCartItem
