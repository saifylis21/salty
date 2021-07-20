import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    categoryItems: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CATEGORY_FETCH_START:
            return categoryFetchStart(state, action);
        case actionTypes.CATEGORY_FETCH_SET:
            return categoryFetchSet(state, action);
        case actionTypes.CATEGORY_FETCH_FAIL:
            return categoryFetchFail(state, action);
        default:
            return state;
    };
};

const categoryFetchStart = (state, action) => {
    return {
        ...state,
        categoryItems: null,
        loading: true
    };
};

const categoryFetchSet = (state, action) => {
    return {
        ...state,
        loading: false,
        error: false,
        categoryItems: action.categoryItems
    };
};

const categoryFetchFail = (state, action) => {
    return {
        ...state,
        error: true
    };
};

export default reducer;