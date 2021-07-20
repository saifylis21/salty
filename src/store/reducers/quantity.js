import * as actionTypes from '../actions/actionTypes';

const initialState = {
    productName: "",
    totalPrice: 0,
    quantity: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INC_QUANTITY:
            return incQuantity(state, action);
        case actionTypes.DEC_QUANTITY:
            return decQuantity(state, action);
        case actionTypes.RESET_QUANTITY:
            return resetQuantity(state, action);
        default:
            return state;
    }
};

const incQuantity = (state, action) => {
    return {
        ...state,
        productName: action.name,
        totalPrice: state.totalPrice + action.priceAddition,
        quantity: state.quantity + 1
    };
};

const decQuantity = (state, action) => {
    return {
        ...state,
        totalPrice: state.totalPrice - action.priceDeduction,
        quantity: state.quantity - 1
    };
};

const resetQuantity = (state, action) => {
    return {
        ...state,
        productName: "",
        totalPrice: 0,
        quantity: 0
    };
};

export default reducer;