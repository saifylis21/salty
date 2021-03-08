import React from 'react';

import classes from './ProductCard.module.css';

const ProductCard = (props) => (
    <div className={classes.ProductCard}>
        <img className={classes.Img} src={props.img} alt="product"/>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
    </div>
);

export default ProductCard;