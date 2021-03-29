import React from 'react';

import CategoryItem from './CategoryItem/CategoryItem';

const CategoryItems = (props) => {
    let items = null;
    items = Object.keys(props.categoryItems).map((categoryKey) => {
        let item = props.categoryItems[categoryKey];
        if (item.category === props.category) {
            return (
                <CategoryItem key={categoryKey} itemId={categoryKey} name={item.name} img={item.imgURL} />
            )
        } else {
            return null;
        }
    });

    return (
        <div>
            {items}
        </div>
    );
}

export default CategoryItems;