import React from 'react';

import classes from './CategoryCard.module.css'

const CategoryCard = (props) => (
    <div className={classes.CategoryCard}>
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
    </div>
)

export default CategoryCard;