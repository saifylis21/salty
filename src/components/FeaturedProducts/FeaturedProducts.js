import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import ProductCard from './ProductCard/ProductCard';

const FeaturedProducts = (props) => (
    <Aux>
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </Aux>
)

export default FeaturedProducts;