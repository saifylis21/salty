import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CategoryCard.module.css'

const CategoryCard = (props) => (
    <Link to={`/browse/${props.name}`}>
        <div className={classes.CategoryCard}>
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
        </div>
    </Link>
);

export default CategoryCard;