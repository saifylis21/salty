import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-main';

export const fetchCardInfoFailed = () => {
    return {
        type: actionTypes.FETCH_CARDINFO_FAILED
    }
};

export const setCardInfo = (cardInfo) => {
    return {
        type: actionTypes.SET_CARDINFO,
        cardInfo: cardInfo
    }
};

export const setCardInfoStart = () => {
    return { type: actionTypes.START_SET_CARDINFO };
};

export const initCardInfo = () => {
    return dispatch => {
        dispatch(setCardInfoStart())
        axios.get('/cardInfo.json?orderBy="featured"&equalTo=true')
        .then((response) => {
            dispatch(setCardInfo(response.data));
        })
        .catch((err) => {
            dispatch(fetchCardInfoFailed());
        });
    }
}