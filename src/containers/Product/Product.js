import React, { useEffect, useState } from 'react';
import axios from '../../axios-main';

import ProductCard from './ProductCard/ProductCard';


const Product = (props) => {

    const productId = props.match.params.id;
    const [product, setProduct] = useState({});
    // const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get('/cardInfo.json')
        .then((response) => {
            Object.keys(response.data).forEach((key) => {
                let item = response.data[key];
                if (key === productId) {
                    setProduct({
                        imgURL: item.imgURL,
                        name: item.name,                        
                        price: item.price             
                    });
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }, [productId]);

    let card = null;
    if(product) {
        card = <ProductCard imgURL={product.imgURL} name={product.name} price={product.price} />
    }

    return (
        <div>
            {card}
        </div>
    );

};

export default Product;