import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Home.module.css';

import Aux from '../../hoc/Aux/Aux';
import Spinner from '../../components/UI/Spinner/Spinner';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import ImageSlider from '../../components/UI/ImageSlider/ImageSlider';
import * as homeActions from '../../store/actions/index';

const Home = (props) => {
    const {onInitCardInfo, cardInfo, error, loading} = props;

    useEffect(() => {
        onInitCardInfo()
    }, [onInitCardInfo]);

    let showCardInfo = error ? <p className={classes.errorMessage}>Unable to load at the moment :(</p> : null;

    if(loading) {
        showCardInfo = ( <Spinner /> );
    };

    if(cardInfo) {
        showCardInfo = (
            <Aux>
                <ImageSlider />
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
        error: state.home.error,
        loading: state.home.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCardInfo: () => dispatch(homeActions.initCardInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);