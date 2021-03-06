import axios from 'axios';



const url= "https://yelp-clone-server.herokuapp.com";

export const fetchBussinessInfo = (search) =>  axios.get(`${ url }/businesses/search?term=${ search.term }&location=${ search.location }`);

export const fetchReviewInfo = ( id ) =>  axios.get( `${ url }/businesses/${ id }`);

