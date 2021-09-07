import axios from 'axios';

export default axios.create({
    baseUrl: 'https://insulink-backend.herokuapp.com/api/v1/auth'
})