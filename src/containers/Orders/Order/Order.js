import React from 'react';

import classes from './Order.module.css';

const Order = (props) => {

    return (
        <div className={classes.Order}>
            <h1>{props.name}</h1>
            <h2>Quantity: {props.quantity}</h2>
            <h2>Bill: {props.price}</h2>
        </div>
    );
};

export default Order;