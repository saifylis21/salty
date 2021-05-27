import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NaviagtionItem';
import * as constants from '../../../constants';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link="/">{constants.NavigationItems.home}</NavigationItem>
        <NavigationItem exact link="/browse">{constants.NavigationItems.browse}</NavigationItem>
        { props.isAuthenticated ? <NavigationItem exact link="/orders">{constants.NavigationItems.orders}</NavigationItem> : null }
        { !props.isAuthenticated
            ? <NavigationItem exact link="/auth">{constants.NavigationItems.auth}</NavigationItem>
            : <NavigationItem exact link="/logout">{constants.NavigationItems.logout}</NavigationItem> }
    </ul>
);

export default navigationItems;