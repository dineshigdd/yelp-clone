import axios from 'axios';


const url = 'http://localhost:5000/search';

export const fetchBussinessInfo = (search) =>  axios.get(url+'?term='+ search.term +'&location='+ search.location );