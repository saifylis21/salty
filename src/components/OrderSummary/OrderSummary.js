import React from 'react';

const OrderSummary = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>Quantity: {props.order.quantity}</h4>
            <h4>Total Price: {props.order.totalPrice}</h4>
        </div>
    );
};

export default OrderSummary;