import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import ProductCard from './ProductCard/ProductCard';

const FeaturedProducts = (props) => {

    console.log("THIS IS DATA", props.cardInfo);

    return (
        <Aux>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Aux>
    );
}

export default FeaturedProducts;