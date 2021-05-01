import * as actionTypes from '../actions/actionTypes';
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

export const initCategories = () => {
    return dispatch => {
        axios.get('/categories.json')
        .then((response) => {
            dispatch(setCategories(response.data));
        })
        .catch((err) => {
            dispatch(fetchCategoriesFailed());
        });
    }
}