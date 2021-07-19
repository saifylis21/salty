import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: null,
    error: null,
    loading: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.CANCEL_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.filter(order => order.key !== action.orderID)
            }
        case actionTypes.CANCEL_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;