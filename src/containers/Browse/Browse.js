import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Browse.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Categories from '../../components/Categories/Categories';
import * as browseActions from '../../store/actions/index';

const Browse = (props) => {

    const {onInitCategories, categories, error} = props;

    useEffect(() => {
        onInitCategories();
    }, [onInitCategories]);

    let categoriesShow = error ? <p className={classes.errorMessage}>Unable to load at the moment :(</p> : <Spinner />

    if(categories) {
        categoriesShow = (
            <div className={classes.Browse}>
                <h1>Select a category</h1>
                <Categories categories={categories} />
            </div>
        )
    }

    return (
        <>
            {categoriesShow}
        </>
    );
};

const mapStateToProps = state => {
    return {
        categories: state.browse.categories,
        error: state.browse.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCategories: () => dispatch(browseActions.initCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);