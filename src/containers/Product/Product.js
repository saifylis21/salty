import React, { useEffect, useState } from 'react';
import axios from '../../axios-main';

import OrderSummary from '../../components/OrderSummary/OrderSummary';
import ProductCard from './ProductCard/ProductCard';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';


const Product = (props) => {
    const productId = props.match.params.id;
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState({
        totalPrice: 0,
        quantity: 0
    });
    const [purchasing, setPurchasing] = useState(false);

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
                    setOrder({
                        totalPrice: item.price,
                        quantity: 1
                    });
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }, [productId]);

    const purchaseContinueHandler = () => {
        alert('You continue!');
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false)
    }

    let card = null;
    if(product) {
        card = <Aux>
            <ProductCard imgURL={product.imgURL} name={product.name} price={product.price} />
            <Button clicked={() => {setPurchasing(true)}}>Order now</Button>
        </Aux>
    }

    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <OrderSummary
                    name={product.name}
                    order={order}
                    continue={purchaseContinueHandler}
                />
            </Modal>
            {card}
        </Aux>
    );

};

export default Product;