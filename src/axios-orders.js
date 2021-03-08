import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ecommerce-react-dcc39-default-rtdb.firebaseio.com/'
});

export default instance;