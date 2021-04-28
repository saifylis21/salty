import * as actionTypes from '../actions/actionTypes';

const initialState = {
    productName: "",
    totalPrice: 0,
    quantity: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INC_QUANTITY:
            return {
                ...state,
                productName: action.name,
                totalPrice: state.totalPrice + action.priceAddition,
                quantity: state.quantity + 1
            };
        case actionTypes.DEC_QUANTITY:
            return {
                ...state,
                totalPrice: state.totalPrice - action.priceDeduction,
                quantity: state.quantity - 1
            };
        default:
            return state;
    }
};

export default reducer;