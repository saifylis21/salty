import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    orderSuccess: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PLACE_ORDER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PLACE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orderSuccess: true
            };
        case actionTypes.PLACE_ORDER_FAILED:
            return {
                ...state,
                loading: false,
                orderSuccess: false,
                error: true
            };
        default:
            return state;
    };
};

export default reducer;