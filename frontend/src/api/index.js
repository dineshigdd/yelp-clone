import axios from 'axios';


const url = 'http://localhost:5000/search';
const url_review = 'http://localhost:5000/businesses';

export const fetchBussinessInfo = (search) =>  axios.get(url+'?term='+ search.term +'&location='+ search.location );

export const fetchReviewInfo = ( id ) => axios.get( url_review/{id});
