import React, { useEffect, useState } from 'react';
import axios from '../../axios-main';
import { connect } from 'react-redux';

import PlacingOrder from '../../components/PlacingOrder/PlacingOrder';
import ProductCard from './ProductCard/ProductCard';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux';
import * as quantityActions from '../../store/actions/index';

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
            <ProductCard imgURL={product.imgURL} name={product.name} price={product.price} />
            <Button clicked={() => {setPurchasing(true)}}>Order now</Button>
        </Aux>
    };

    return (
        <Aux>
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
            {card}
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
        dec: (cost) => dispatch(quantityActions.decQuantity(cost))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);