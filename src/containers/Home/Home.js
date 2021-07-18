import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Home.module.css';

import Aux from '../../hoc/Aux/Aux';
import Spinner from '../../components/UI/Spinner/Spinner';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import * as homeActions from '../../store/actions/index';

const Home = (props) => {
    const {onInitCardInfo, cardInfo, error} = props;

    useEffect(() => {
        onInitCardInfo()
    }, [onInitCardInfo]);

    let showCardInfo = error ? <p className={classes.errorMessage}>Unable to load at the moment :(</p> : <Spinner />

    if(cardInfo) {
        showCardInfo = (
            <Aux>
                <h1 style={{margin: "100px"}}>CAUSORAL</h1>
                <FeaturedProducts cardInfo={cardInfo}/>
            </Aux>
        );
    };

    return (
        <>
            {showCardInfo}
        </>
    );
}

const mapStateToProps = state => {
    return {
        cardInfo: state.home.cardInfo,
        error: state.home.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCardInfo: () => dispatch(homeActions.initCardInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);