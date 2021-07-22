import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Orders.module.css';
import Order from './Order/Order';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as orderActions from '../../store/actions/index';

const Orders = (props) => {

    const {fetchOrders, token, userId, orders, cancelOrder, loading} = props;
    const [tobeDeleatedOrderID, setTobeDeleatedOrderID] = useState(null);

    let ordersShow;
    if(orders !== null) {
        ordersShow = Object.keys(orders).map((orderKey) => {
            let order = orders[orderKey];
            return (
                <div key={order.key}>
                    <Order name={order.name} quantity={order.quantity} price={order.price} id={order.key} deleteID={setTobeDeleatedOrderID}/>
                </div>
            );
        });
    }

    if(loading) {
        ordersShow = <Spinner />;
    };

    if (orders && !loading && Object.keys(orders).length === 0) {
        ordersShow = <h2 className={classes.NoOrder} >No Orders to show.</h2>
    }

    useEffect(() => {
        fetchOrders(token, userId);
    }, [fetchOrders, token, userId]);

    const cancellingCancelHandler = () => {
        setTobeDeleatedOrderID(null);
    };

    const cancelOrderHandler = () => {
        cancellingCancelHandler();
        cancelOrder(token, tobeDeleatedOrderID);
    };

    return (
        <div className={classes.Orders}>
            {ordersShow}
            {<Modal show={tobeDeleatedOrderID != null} modalClosed={cancellingCancelHandler}>
                <h2>Are you sure you want to cancel this order?</h2>
                <Button clicked={cancelOrderHandler}>Yes</Button>
                <Button clicked={cancellingCancelHandler}>No</Button>
            </Modal>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        orders: state.orders.orders,
        loading: state.orders.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token, userId) => dispatch(orderActions.fetchOrders(token, userId)),
        cancelOrder: (token, orderId) => dispatch(orderActions.cancelOrder(token, orderId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);