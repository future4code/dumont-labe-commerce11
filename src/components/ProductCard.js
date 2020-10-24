import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
    border: 1px dotted white;
`

const PlanetsPictures = styled.img`
    max-width: 300px;
    max-height: 300px;
    width: auto;
    height: auto;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

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
                <PlanetsPictures src={product.image}/>
                <CardInfo>
                    <p>{product.name}</p>
                    <p>R${product.price},00</p>
                    <AddButton onClick={()=>this.props.addProduct(product.id,product.image,product.name,product.price)}>Adicionar ao carrinho</AddButton>
                </CardInfo>
            </CardContainer>
            
        )
    }

}

export default ProductCard

