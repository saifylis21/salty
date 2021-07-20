import React from 'react';

import classes from './ProductCard.module.css';
import Button from '../../../components/UI/Button/Button';

const ProductCard = (props) => (
    <div className={classes.ProductCard}>
        <h1>{props.name}</h1>
        <h1>Price: {props.price}</h1>
        <img src={props.imgURL} alt="" />
        <Button clicked={() => props.setPurchase(true)}>Order Now</Button>
    </div>
);

export default ProductCard;