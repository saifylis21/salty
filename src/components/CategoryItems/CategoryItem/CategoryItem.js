import React from 'react';

const CategoryItem = (props) => (
    <div>
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
    </div>
);

export default CategoryItem;