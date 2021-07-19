import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: null,
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
                error: false,
                loading: false
            };
        case actionTypes.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error: true,
                loading: false
            }
        case actionTypes.START_SET_CATEGORIES:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

export default reducer;