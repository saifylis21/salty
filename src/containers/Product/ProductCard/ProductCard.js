import React from 'react';

import classes from './ProductCard.module.css';

const ProductCard = (props) => (
    <div className={classes.ProductCard}>
        <h1>{props.name}</h1>
        <h1>Price: {props.price}</h1>
        <img src={props.imgURL} alt="" />
    </div>
);

export default ProductCard;