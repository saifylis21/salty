import React from 'react';

const OrderSummary = (props) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h3><strong>Product Name: </strong>{props.productName}</h3>
            <h3><strong>Quantity: </strong>{props.quantity}</h3>
            <h3><strong>Total Price: </strong>{props.totalPrice}</h3>
        </div>
    );
};

export default OrderSummary;