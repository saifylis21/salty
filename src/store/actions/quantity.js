import * as actionTypes from './actionTypes';

export const incQuantity = (cost, name) => {
    return {
        type: actionTypes.INC_QUANTITY,
        priceAddition: cost,
        name: name
    }
}

export const decQuantity = (cost) => {
    return {
        type: actionTypes.DEC_QUANTITY,
        priceDeduction: cost
    }
}