import React, { useEffect, useState } from 'react';
import axios from '../../axios-main';

import ProductCard from './ProductCard/ProductCard';
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Aux/Aux';


const Product = (props) => {
    const productId = props.match.params.id;
    const [product, setProduct] = useState({});
    const [showModal, setShowModal] = useState(false);
    console.log(showModal)

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
        card = <Aux>
            <ProductCard imgURL={product.imgURL} name={product.name} price={product.price} />
            <Button clicked={() => {setShowModal(true)}}>Order now</Button>
        </Aux>
    }

    return (
        <div>
            {card}
        </div>
    );

};

export default Product;