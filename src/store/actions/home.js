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

export const initCardInfo = () => {
    return dispatch => {
        axios.get('/cardInfo.json')
        .then((response) => {
            dispatch(setCardInfo(response.data));
        })
        .catch((err) => {
            dispatch(fetchCardInfoFailed());
        });
    }
}