import React, { useEffect, useState } from 'react';
import axios from '../../axios-main';

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
        <div>
            <h1>browse</h1>
            <h1>browse</h1>
            <h1>browse</h1>
            <Categories categories={categories} />
        </div>
    )
}

export default Browse;