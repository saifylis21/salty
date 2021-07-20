import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CategoryItem.module.css';

const CategoryItem = (props) => (
    <Link to={`/product/${props.itemId}`}>
        <div className={classes.CategoryItem}>
            <img className={classes.Image} src={props.img} alt="" />
            <h3>{props.name}</h3>
        </div>
    </Link>
);

export default CategoryItem;