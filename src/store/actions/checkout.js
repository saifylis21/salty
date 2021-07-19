import * as actionTypes from './actionTypes';
import axios from '../../axios-main';

export const orderStart = () => {
    return { type: actionTypes.PLACE_ORDER_START };
};

export const orderSuccess = () => {
    return { type: actionTypes.PLACE_ORDER_SUCCESS };
};

export const orderFail = () => {
    return { type: actionTypes.PLACE_ORDER_FAILED };
};

export const orderReset = () => {
    return { type: actionTypes.PLACE_ORDER_RESET };
};

export const placeOrder = (token, finalOrder) => {
    return dispatch => {
        dispatch(orderStart())
        axios.post('/orders.json?auth=' + token, finalOrder)
        .then(response => {
            dispatch(orderSuccess())
        })
        .catch(error => {
            dispatch(orderFail())
        })
    };
};