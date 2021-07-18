import React from 'react';

import Button from '../UI/Button/Button';
import * as constants from '../../constants';

const PlacingOrder = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{constants.PlacingOrder.quantity}{props.quantity}</h4>
            <Button disabled={props.quantity === 0 ? true : false} clicked={() => props.dec(props.cost)}>{constants.PlacingOrder.subtract}</Button>
            <Button clicked={() => props.inc(props.cost, props.name)}>{constants.PlacingOrder.add}</Button>
            <h4>{constants.PlacingOrder.totalPrice}{props.totalPrice}</h4>
            <Button clicked={props.continue}>{props.isAuth ? constants.PlacingOrder.proceed : constants.PlacingOrder.signIn}</Button>
        </div>
    );
};

export default PlacingOrder;