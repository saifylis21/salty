import classes from '*.module.css';
import React from 'react';

const Input = (props) => {
    let inputElement = null;

    switch(props.elementType) {
        case('input'):
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} />
            break;
        case('textarea'):
            inputElement = <textarea className={classes.InputElement} {...props.elementConfig} value={props.value} />
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} />
    }

    return (
        <div>
            {inputElement}
        </div>
    )
}

export default Input;
