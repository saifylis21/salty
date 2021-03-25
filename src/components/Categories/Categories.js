import React from 'react';

import CategoryCard from './CategoryCard/CategoryCard';

const Categories = (props) => {

    let categories = null;
    categories = Object.keys(props.categories).map((categoryKey) => {
        let category = props.categories[categoryKey];
        return (
            <CategoryCard key={categoryKey} name={category.name} img={category.imgURL} />
        )
    });


    return (
        <div>
            {categories}
        </div>
    )
}

export default Categories;