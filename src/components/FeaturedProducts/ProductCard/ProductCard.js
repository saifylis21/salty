import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ProductCard.module.css';

const ProductCard = (props) => (
    <Link to={`/product/${props.itemId}`}>
        <div className={classes.ProductCard}>
            <img className={classes.Img} src={props.img} alt="product"/>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
        </div>
    </Link>

);

export default ProductCard;