import React, { useEffect, useState } from 'react';
import axios from '../../axios-main';
import { connect } from 'react-redux';

import PlacingOrder from '../../components/PlacingOrder/PlacingOrder';
import ProductCard from './ProductCard/ProductCard';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';
import * as quantityActions from '../../store/actions/index';

const Product = (props) => {
    const productId = props.match.params.id;
    const {reset} = props;
    const [product, setProduct] = useState({});
    const [purchasing, setPurchasing] = useState(false);

    useEffect(() => {
        reset();
        axios.get(`/cardInfo/${productId}.json`)
        .then((response) => {
            setProduct({
                imgURL: response.data.imgURL,
                name: response.data.name,                        
                price: response.data.price             
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }, [productId, reset]);


    const purchaseContinueHandler = () => {
        if(props.isAuthenticated) {
            props.history.push('/checkout');
        } else {
            props.history.push('/auth');
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false)
    }

    let card = null;
    if(product) {
        card = <Aux>
            <ProductCard imgURL={product.imgURL} name={product.name} price={product.price} setPurchase={setPurchasing} />
        </Aux>
    };

    return (
        <Aux>
            {card}
            {purchasing && <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <PlacingOrder
                    name={product.name}
                    totalPrice={props.totalPrice}
                    quantity={props.quantity}
                    continue={purchaseContinueHandler}
                    inc={props.inc}
                    dec={props.dec}
                    cost={product.price}
                    isAuth={props.isAuthenticated}
                />
            </Modal>}
        </Aux>
    );

};

const mapStateToProps = state => {
    return {
        productName: state.quantity.productName,
        totalPrice: state.quantity.totalPrice,
        quantity: state.quantity.quantity,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        inc: (cost, name) => dispatch(quantityActions.incQuantity(cost, name)),
        dec: (cost) => dispatch(quantityActions.decQuantity(cost)),
        reset: () => dispatch(quantityActions.resetQuantity())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);