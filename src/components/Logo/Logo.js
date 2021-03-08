import React from 'react';

import logoImg from '../../assets/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logoImg} alt="SALTY." />
    </div>
);

export default logo;