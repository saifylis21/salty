import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-main';

export const fetchOrdersFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
        .then(response => {
            let orderItems = []
            for (let key in response.data) {
                orderItems.push({
                    key,
                    ...response.data[key]
                })
            }
            dispatch(fetchOrdersSuccess(orderItems))
        })
        .catch((error) => {
            dispatch(fetchOrdersFailed(error))
        })
    }
}

export const cancelDeleteSuccess = (orderID) => {
    return { type: actionTypes.CANCEL_ORDER_SUCCESS, orderID };
}

export const cancelDeleteFail = () => {
    return { type: actionTypes.CANCEL_ORDER_FAIL };
}

export const cancelOrder = (token, orderID) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.delete(`/orders/${orderID}.json?auth=${token}`)
        .then(response => {
            dispatch(cancelDeleteSuccess(orderID))
        })
        .catch(error => {
            dispatch(cancelDeleteFail(error))
        })
    }
}