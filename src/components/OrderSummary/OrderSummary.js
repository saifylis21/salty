import React from 'react';

import Button from '../../components/UI/Button/Button';

const OrderSummary = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>Quantity: {props.order.quantity}</h4>
            <Button clicked={props.dec}>-</Button>
            <Button clicked={props.inc}>+</Button>
            <h4>Total Price: {props.order.totalPrice}</h4>
            <Button clicked={props.continue}>Checkout</Button>
        </div>
    );
};

export default OrderSummary;