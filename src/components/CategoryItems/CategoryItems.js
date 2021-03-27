import React from 'react';

import CategoryItem from './CategoryItem/CategoryItem';

const CategoryItems = (props) => {
    console.log(props)
    let items = null;
    items = Object.keys(props.categoryItems).map((categoryKey) => {
        let item = props.categoryItems[categoryKey];
        if (item.category === props.category) {
            return (
                <CategoryItem key={categoryKey} name={item.name} img={item.imgURL} />
            )
        } else {
            return null;
        }
    })
    // let cards = null;
    // cards = Object.keys(props.cardInfo).map((cardKey) => {
    //     let card = props.cardInfo[cardKey];
    //     if (card.featured) {
    //         return (
    //             <ProductCard key={cardKey} name={card.name} img={card.imgURL} price={card.price}/>
    //         )
    //     } else {
    //         return null;
    //     }
    // });

    return (
        <div>
            {items}
        </div>
    );
}

export default CategoryItems;