import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import classes from './Orders.module.css';
import Order from './Order/Order';
import * as orderActions from '../../store/actions/index';

const Orders = (props) => {

    const {fetchOrders, token, userId} = props;

    useEffect(() => {
        fetchOrders(token, userId)
    }, [fetchOrders, token, userId]);

    return (
        <>
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
        </>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token, userId) => dispatch(orderActions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);