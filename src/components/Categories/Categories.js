import React from 'react';

import classes from './Categories.module.css';
import CategoryCard from './CategoryCard/CategoryCard';

const Categories = (props) => {
    let categories;
    categories = Object.keys(props.categories).map((categoryKey) => {
        let category = props.categories[categoryKey];
        return (
            <CategoryCard key={categoryKey} name={category.name} img={category.imageURL} />
        );
    });

    return (
        <>
            <h1>Select a category</h1>
            <div className={classes.Categories} >
                {categories}
            </div>
        </>
    );
};

export default Categories;