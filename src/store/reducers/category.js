import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    categoryItems: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CATEGORY_FETCH_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.CATEGORY_FETCH_SET:
            return {
                ...state,
                loading: false,
                error: false,
                categoryItems: action.categoryItems
            };
        case actionTypes.CATEGORY_FETCH_FAIL:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}

export default reducer;