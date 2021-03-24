import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Browse = () => {
    const [cardInfo, setCardInfo] = useState({});

    useEffect(() => {
        axios.get('https://ecommerce-react-dcc39-default-rtdb.firebaseio.com/.json')
        .then((response) => {
            setCardInfo(response.data.cardInfo);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    console.log(cardInfo);

    return (
        <div>
            <h1>this is browse you asshole</h1>
            <h1>this is browse you asshole</h1>
            <h1>this is browse you asshole</h1>
            <h1>this is browse you asshole</h1>
            <h1>this is browse you asshole</h1>
            <h1>this is browse you asshole</h1>
            <h1>this is browse you asshole</h1>
        </div>
    )
}

export default Browse;