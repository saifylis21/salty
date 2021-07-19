import * as actionTypes from './actionTypes';
import axios from '../../axios-main';

export const fetchCategoriesFailed = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAILED
    }
};

export const setCategories = (categories) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        categories: categories
    }
};

export const setCategoriesStart = () => {
    return {
        type: actionTypes.START_SET_CATEGORIES
    }
}

export const initCategories = () => {
    return dispatch => {
        dispatch(setCategoriesStart())
        axios.get('/categories.json')
        .then((response) => {
            dispatch(setCategories(response.data));
        })
        .catch((err) => {
            dispatch(fetchCategoriesFailed());
        });
    }
}