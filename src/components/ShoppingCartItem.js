import React from "react";
import styled from 'styled-components';
const CardContainer = styled.div`
    border: 1px solid black;
`
const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 4px 0;
`

const AddButton = styled.button`
    align-self: center;
    margin-top: 4px;
`

class ProductCard extends React.Component {
    render(){
        const product = this.props.product
        return(
            <CardContainer>
                {/* <img src={product.image}/>
                <CardInfo>
                <p>{product.item}</p>
                <p>{product.price}</p>
                <AddButton>Adicionar ao carrinho</AddButton>
                </CardInfo> */}
                <img src='https://picsum.photos/200/200?a=1'/>
                <CardInfo>
                <p>item: 'Item 1'</p>
                <p>price: 100,</p>
                <AddButton>Adicionar ao carrinho</AddButton>
                </CardInfo>
            </CardContainer>
        )
    }
}
export default ProductCard