import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Category.module.css';

const CategoryItem = (props) => (
    <Link to={`/product/${props.itemId}`}>
        <div>
            <img className={classes.Image} src={props.img} alt="" />
            <h1>{props.name}</h1>
        </div>
    </Link>
);

export default CategoryItem;