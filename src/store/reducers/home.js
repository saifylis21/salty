import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cardInfo: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CARDINFO:
            return {
                ...state,
                cardInfo: action.cardInfo,
                error: false,
                loading: false
            };
        case actionTypes.FETCH_CARDINFO_FAILED:
            return {
                ...state,
                error: true,
                loading: false
            }
        case actionTypes.START_SET_CARDINFO:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

export default reducer;