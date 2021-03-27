import React, { useEffect, useState } from 'react';
import axios from '../../axios-main';

import classes from './Browse.module.css';
import Categories from '../../components/Categories/Categories';

const Browse = () => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        axios.get('/categories.json')
        .then((response) => {
            setCategories(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className={classes.Browse}>
            <h1>Select a category</h1>
            <Categories categories={categories} />
        </div>
    )
}

export default Browse;