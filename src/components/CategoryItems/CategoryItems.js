import React from 'react';

import CategoryItem from './CategoryItem/CategoryItem';

const CategoryItems = (props) => {
    let items = null;
    items = Object.keys(props.categoryItems).map((categoryKey) => {
        let item = props.categoryItems[categoryKey];
        return (
            <CategoryItem key={item.key} itemId={item.key} name={item.name} img={item.imgURL} />
        );
    });

    return (
        <div style={{margin: "100px 0 0 0"}}>
            {items}
        </div>
    );
}

export default CategoryItems;