import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: null,
    error: true
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
                error: false
            };
        case actionTypes.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
};

export default reducer;