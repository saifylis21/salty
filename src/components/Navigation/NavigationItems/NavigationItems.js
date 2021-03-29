import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NaviagtionItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link="/">Home</NavigationItem>
        <NavigationItem exact link="/browse">Browse</NavigationItem>
    </ul>
);

export default navigationItems;