import axios from 'axios';

export default axios.create({
    racerURL: 'https://jsonplaceholder.typicode.com/photos',
    constructorURL: 'https://jsonplaceholder.typicode.com/comments'
});