import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    orderSuccess: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PLACE_ORDER_START:
            return placeOrderStart(state, action);
        case actionTypes.PLACE_ORDER_SUCCESS:
            return placeOrderSuccess(state, action);
        case actionTypes.PLACE_ORDER_FAILED:
            return placeOrderFailed(state, action);
        case actionTypes.PLACE_ORDER_RESET:
            return placeOrderReset(state, action);
        default:
            return state;
    };
};

const placeOrderStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const placeOrderSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        orderSuccess: true
    };
};

const placeOrderFailed = (state, action) => {
    return {
        ...state,
        loading: false,
        orderSuccess: false,
        error: true
    };
};

const placeOrderReset = (state, action) => {
    return {
        ...state,
        loading: false,
        orderSuccess: false,
        error: false
    };
};

export default reducer;