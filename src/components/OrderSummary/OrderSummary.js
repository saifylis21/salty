import React from 'react';

import Button from '../../components/UI/Button/Button';

const OrderSummary = (props) => {
    console.log("WDFSDFFSD");
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>Quantity: {props.quantity}</h4>
            <Button clicked={() => props.dec(props.cost)}>-</Button>
            <Button clicked={() => props.inc(props.cost, props.name)}>+</Button>
            <h4>Total Price: {props.totalPrice}</h4>
            <Button clicked={props.continue}>Checkout</Button>
        </div>
    );
};

export default OrderSummary;