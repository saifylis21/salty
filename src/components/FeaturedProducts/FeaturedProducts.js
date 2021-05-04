import React from 'react';

import classes from './FeaturedProducts.module.css';
import ProductCard from './ProductCard/ProductCard';

const FeaturedProducts = (props) => {
    
    let cards;
    cards = Object.keys(props.cardInfo).map((cardKey) => {
        let card = props.cardInfo[cardKey];
        if (card.featured) {
            return (
                <ProductCard key={cardKey} itemId={cardKey} name={card.name} img={card.imgURL} price={card.price}/>
            )
        } else {
            return null;
        }
    });

    return (
        <div className={classes.FeaturedProducts}>
            {cards}
        </div>
    );
}

export default FeaturedProducts;