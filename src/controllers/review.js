const yelp = require('yelp-fusion');
const axios = require('axios');
const apiKey = 'DP73lJ7n5m9pL1hZ41GMoO4r2R0zLf8G7tess5ZDnAVt1mH1R4cEX9qsVLW3GRtYBqoZqyvTtQFYsZFRV1AO0A-TTCIMkDk70iQh1vAz7OGRyam_AgIU-ok0SMGCYXYx';
const client = yelp.client(apiKey);

module.exports = getReviewInfo = ( req, res ) =>{

    axios.get('https://api.yelp.com/v3/businesses/{'+ req.params.id + '/reviews', {
        headers: {
          Authorization: `Bearer ${apiKey}`
     },
    })
     .then((response) => {
        console.log( response.data );
       
        // res.send(response.data);

     })
     .catch((err) => console.log(err))
    
}