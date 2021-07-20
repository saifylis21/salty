import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: null,
    error: null,
    loading: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAILED:
            return fetchOrdersFailed(state, action);
        case actionTypes.CANCEL_ORDER_SUCCESS:
            return cancelOrderSuccess(state, action);
        case actionTypes.CANCEL_ORDER_FAIL:
            return cancelOrderFail(state, action);
        default:
            return state;
    };
};

const fetchOrdersStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const fetchOrdersSuccess = (state, action) => {
    return {
        ...state,
        orders: action.orders,
        loading: false
    };
};

const fetchOrdersFailed = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    };
};

const cancelOrderSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        orders: state.orders.filter(order => order.key !== action.orderID)
    };
};

const cancelOrderFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    };
};

export default reducer;