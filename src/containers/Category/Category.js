import React, { useEffect, useState } from 'react';
import axios from '../../axios-main';

import CategoryItems from '../../components/CategoryItems/CategoryItems';

const Category = (props) => {

    const [categoryItems, setCategoryItems] = useState("");
    const category = props.match.params.category

    useEffect(() => {
        axios.get('/cardInfo.json')
        .then((response) => {
            setCategoryItems(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <CategoryItems categoryItems={categoryItems} category={category} />
        </div>

    )
}

export default Category;