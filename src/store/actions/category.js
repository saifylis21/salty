import * as actionTypes from './actionTypes';
import axios from '../../axios-main';

export const categoryFetchStart = () => {
    return { type: actionTypes.CATEGORY_FETCH_START };
};

export const categoryFetchSet = (categoryItems) => {
    return {
        type: actionTypes.CATEGORY_FETCH_SET,
        categoryItems: categoryItems
    };
};

export const categoryFetchFail = () => {
    return {
        type: actionTypes.CATEGORY_FETCH_FAIL
    };
};

export const initCategory = (category) => {
    return dispatch => {
        dispatch(categoryFetchStart())
        axios.get(`/cardInfo.json?orderBy="category"&equalTo="${category}"`)
        .then(response => {
            let categoryItems = []
            for (let key in response.data) {
                categoryItems.push({
                    key,
                    ...response.data[key]
                })
            }
            dispatch(categoryFetchSet(categoryItems))
        })
        .catch(error => {
            dispatch(categoryFetchFail())
        })
    };
};