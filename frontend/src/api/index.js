import axios from 'axios';





export const fetchBussinessInfo = (search) =>  axios.get(`/businesses/search?term=${ search.term }&location=${ search.location }`);

export const fetchReviewInfo = ( id ) =>  axios.get( `/businesses/${ id }`);

