import React from 'react';
import { Link } from 'react-router-dom';

import CategoryCard from './CategoryCard/CategoryCard';

const Categories = (props) => {

    let categories = null;
    categories = Object.keys(props.categories).map((categoryKey) => {
        let category = props.categories[categoryKey];
        return (
            <Link key={categoryKey} to={`/browse/${category.name}`}>
                <CategoryCard name={category.name} img={category.imageURL} />
            </Link>
        )
    });


    return (
        <div>
            {categories}
        </div>
    )
}

export default Categories;