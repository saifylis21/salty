import React from 'react';

import classes from './ProductCard.module.css';

const ProductCard = (props) => (
    <div className={classes.ProductCard}>
        <p>{props.head}</p>
        <p>info</p>
    </div>
);

export default ProductCard;