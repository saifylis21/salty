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
        default:
            return state;
    }
}

export default reducer;