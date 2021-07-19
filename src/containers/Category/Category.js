import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CategoryItems from '../../components/CategoryItems/CategoryItems';
import * as CategoryActions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const Category = (props) => {
    const {onInitCategory, error, loading, categoryItems} = props;
    const category = props.match.params.category;

    useEffect(() => {
        onInitCategory(category);
    }, [onInitCategory, category]);


    let categoryItemsShow = error ? <p>Sorry, there seems to be a problem right now :(</p> : null;
    
    if(loading) {
        categoryItemsShow = ( <Spinner/> );
    };

    if(categoryItems) {
        categoryItemsShow = ( <CategoryItems categoryItems={categoryItems} category={category} /> );
    };

    return (
        <div>
            {categoryItemsShow}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.category.loading,
        error: state.category.error,
        categoryItems: state.category.categoryItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitCategory: (category) => dispatch(CategoryActions.initCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);