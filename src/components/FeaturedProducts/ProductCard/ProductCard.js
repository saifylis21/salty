import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ProductCard.module.css';
import * as constants from '../../../constants';

const ProductCard = (props) => (
    <Link to={`/product/${props.itemId}`}>
        <div className={classes.ProductCard}>
            <img className={classes.Img} src={props.img} alt="product"/>
            <p>{constants.ProductCard.productName}{props.name}</p>
            <p>{constants.ProductCard.price}{props.price}</p>
        </div>
    </Link>
);

export default ProductCard;