
const yelp = require('yelp-fusion');
const apiKey = 'DP73lJ7n5m9pL1hZ41GMoO4r2R0zLf8G7tess5ZDnAVt1mH1R4cEX9qsVLW3GRtYBqoZqyvTtQFYsZFRV1AO0A-TTCIMkDk70iQh1vAz7OGRyam_AgIU-ok0SMGCYXYx';
// const client = yelp.client(apiKey);

module.exports = getBusinsessInfo = (  req, res ) =>
{
   
    const searchRequest = {
        term:req.query.term,
        location: req.query.location
    }
    
    res.json({data: "Hello Dinesh"});
        // client.search(searchRequest).then(response => {
        //     const firstResult = response.jsonBody.businesses[0];
        //     const prettyJson = JSON.stringify(firstResult, null, 4);
        //     console.log(prettyJson);
        //     res.json( { data: prettyJson });
        //     }).catch(e => {
        //       console.log(e);
        //   });

}