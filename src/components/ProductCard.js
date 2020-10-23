import React from "react";
import styled from 'styled-components';


const CardContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`
const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    p{
        margin: 4px 0
}
`;
const AddButton = styled.button`
    align-self: center;
    margin-top: 4px;
`
class ProductCard extends React.Component {
    render(){
        const product = this.props.product
        return(
            <CardContainer>
                <img src={product.image}/>
                <CardInfo>
                    <p><b>{product.name}</b></p>
                    <p>R${product.price},00</p>
                    <AddButton>Adicionar ao carrinho</AddButton>
                </CardInfo>
            </CardContainer>
        )
    }
}
export default ProductCard