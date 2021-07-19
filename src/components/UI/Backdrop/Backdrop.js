import React from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        <>
            <CSSTransition in={props.show} timeout={300} classNames="sample" unmountOnExit>
                <div className={classes.Backdrop} onClick={props.clicked}></div>
            </CSSTransition>
        </>
    );
};

export default backdrop;