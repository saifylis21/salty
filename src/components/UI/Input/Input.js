import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;

    switch(props.elementType) {
        case('input'):
            inputElement = <input 
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case('textarea'):
            inputElement = <textarea 
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        default:
            inputElement = <input 
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
    }

    return (
        <div>
            {inputElement}
        </div>
    )
}

export default Input;
