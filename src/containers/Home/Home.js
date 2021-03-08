import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
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

    return (
        <Aux>
            <h1 style={{margin: "100px"}}>CAUSORAL</h1>
            <FeaturedProducts cardInfo={cardInfo}/>
        </Aux>
    );
}

export default Home;