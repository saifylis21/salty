import React, { useEffect, useState } from 'react';
import axios from '../../axios-main';
import { connect } from 'react-redux';

import OrderSummary from '../../components/OrderSummary/OrderSummary';
import ProductCard from './ProductCard/ProductCard';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';
import * as actionTypes from '../../store/actions';


const Product = (props) => {
    const productId = props.match.params.id;
    const [product, setProduct] = useState({});
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
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }, [productId]);


    const purchaseContinueHandler = () => {
        props.history.push('/checkout');
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
                    totalPrice={props.totalPrice}
                    quantity={props.quantity}
                    continue={purchaseContinueHandler}
                    inc={props.inc}
                    dec={props.dec}
                    cost={product.price}
                />
            </Modal>
            {card}
        </Aux>
    );

};

const mapStateToProps = state => {
    return {
        totalPrice: state.totalPrice,
        quantity: state.quantity
    };
}

const mapDispatchToProps = dispatch => {
    return {
        inc: (cost) => dispatch({type: actionTypes.INC_QUANTITY, priceAddition: cost}),
        dec: (cost) => dispatch({type: actionTypes.DEC_QUANTITY, priceDeduction: cost})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);