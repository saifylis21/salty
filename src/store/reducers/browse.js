import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: null,
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CATEGORIES:
            return setCategories(state, action);
        case actionTypes.FETCH_CATEGORIES_FAILED:
            return fetchCategoriesFailed(state, action);
        case actionTypes.START_SET_CATEGORIES:
            return startSetCategories(state, action);
        default:
            return state;
    };
};

const setCategories = (state, action) => {
    return {
        ...state,
        categories: action.categories,
        error: false,
        loading: false
    };
};

const fetchCategoriesFailed = (state, action) => {
    return {
        ...state,
        error: true,
        loading: false
    };
};

const startSetCategories = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

export default reducer;