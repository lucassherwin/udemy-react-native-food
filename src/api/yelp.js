import axios from 'axios';

// var apikey = process.env.REACT_APP_YELP_API_KEY;

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        // Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}` 
    }
});

// yelp.get('/search')
