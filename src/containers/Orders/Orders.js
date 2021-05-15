import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Orders.module.css';
import Order from './Order/Order';
import * as orderActions from '../../store/actions/index';

const Orders = (props) => {

    const {fetchOrders, token, userId, orders} = props;

    let ordersShow;
    console.log(orders);
    if(orders !== null) {
        ordersShow = Object.keys(orders).map((orderKey) => {
            let order = orders[orderKey];
            return (
                <Order key={orderKey} name={order.name} quantity={order.quantity} price={order.price} />
            )
        });
    };

    useEffect(() => {
        fetchOrders(token, userId);
    }, [fetchOrders, token, userId]);

    console.log(orders);

    return (
        <div className={classes.Orders}>
            {orders && ordersShow}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        orders: state.orders.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token, userId) => dispatch(orderActions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);