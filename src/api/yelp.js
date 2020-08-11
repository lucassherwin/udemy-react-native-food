import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 9Zhi3szkheGXxUxVUgzM72Ne3AelI8Wrkzn6A00BqPIRPcz0fZE2R0jkVn6mQKpQebZqfOuFqcsi3tHiTqGDmw-oZ7YEYzeK0eVu_oU3Ezc6ajNXdoA2jaafuMExX3Yx'
    }
});

// yelp.get('/search')