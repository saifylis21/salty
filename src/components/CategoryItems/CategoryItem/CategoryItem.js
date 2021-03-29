import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => (
    <Link to={`/product/${props.itemId}`}>
        <div>
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
        </div>
    </Link>

);

export default CategoryItem;