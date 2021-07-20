import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cardInfo: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CARDINFO:
            return setCardInfo(state, action);
        case actionTypes.FETCH_CARDINFO_FAILED:
            return fetchCardInfoFailed(state, action);
        case actionTypes.START_SET_CARDINFO:
            return startSetCardInfo(state, action);
        default:
            return state;
    };
};

const setCardInfo = (state, action) => {
    return {
        ...state,
        cardInfo: action.cardInfo,
        error: false,
        loading: false
    };
};

const fetchCardInfoFailed = (state, action) => {
    return {
        ...state,
        error: true,
        loading: false
    };
};

const startSetCardInfo = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

export default reducer;