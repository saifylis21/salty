import React from 'react';

import ProductCard from './ProductCard/ProductCard';

const FeaturedProducts = (props) => {

    let cards = null;
    cards = Object.keys(props.cardInfo).map((cardKey) => {
        let card = props.cardInfo[cardKey];
        return (
            <ProductCard key={cardKey} head={card.heading} img={card.image} desc={card.description}/>
        )
    });

    return (
        <div>
            {cards}
        </div>
    );
}

export default FeaturedProducts;