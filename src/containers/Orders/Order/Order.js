import React from 'react';

import classes from './Order.module.css';
import Button from '../../../components/UI/Button/Button';

const Order = (props) => {
    return (
        <div className={classes.Order}>
            <h1>{props.name}</h1>
            <h2>Quantity: {props.quantity}</h2>
            <h2>Bill: {props.price}</h2>
            <Button clicked={() => props.deleteID(props.id)}>Cancel Order</Button>
        </div>
    );
};

export default Order;