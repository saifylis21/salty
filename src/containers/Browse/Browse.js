import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Browse.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Categories from '../../components/Categories/Categories';
import * as browseActions from '../../store/actions/index';

const Browse = (props) => {

    const {onInitCategories, categories, error, loading} = props;

    useEffect(() => {
        onInitCategories();
    }, [onInitCategories]);

    let categoriesShow = error ? <p className={classes.errorMessage}>Unable to load at the moment :(</p> : null;

    if(loading) {
        categoriesShow = ( <div className={classes.Browse}><Spinner /></div> );
    };

    if(categories) {
        categoriesShow = (
            <div className={classes.Browse}>
                <Categories categories={categories} />
            </div>
        );
    };

    return (
        <>
            {categoriesShow}
        </>
    );
};

const mapStateToProps = state => {
    return {
        categories: state.browse.categories,
        error: state.browse.error,
        loading: state.browse.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCategories: () => dispatch(browseActions.initCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);