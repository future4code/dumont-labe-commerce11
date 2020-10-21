import React from 'react';

function ProductCard (props){
    <div>
        <img src={props.image}/>
        <p>{props.item}</p>
        <p>{ props.price}</p>
        <button {props.onClick}></button>

    </div>

}




export default ProductCard;
