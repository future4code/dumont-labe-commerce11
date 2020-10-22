import React from "react";




class ProductCard extends React.Component {
    render(){
        const product = this.props.product
        return(
            <div>
                <img src={product.image}/>
                <p>{product.item}</p>
                <p>R${product.price}</p>
                <button>Adicionar ao carrinho</button>
            </div>
            
        )
    }

}

export default ProductCard