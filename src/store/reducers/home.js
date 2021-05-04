import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cardInfo: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CARDINFO:
            return {
                ...state,
                cardInfo: action.cardInfo,
                error: false
            };
        case actionTypes.FETCH_CARDINFO_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
};

export default reducer;