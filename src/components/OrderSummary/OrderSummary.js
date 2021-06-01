import React from 'react';

import * as constants from '../../constants';

const OrderSummary = (props) => {
    return (
        <div>
            <h2>{constants.OrderSummary.orderSummary}</h2>
            <h3><strong>{constants.OrderSummary.productName}</strong>{props.productName}</h3>
            <h3><strong>{constants.OrderSummary.quantity}</strong>{props.quantity}</h3>
            <h3><strong>{constants.OrderSummary.totalPrice}</strong>{props.totalPrice}</h3>
        </div>
    );
};

export default OrderSummary;