'use strict';

const express = require("express");
const app = express();

// Client ID
// aFkOwjEgzWErXwZvs0G8Rw

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'DP73lJ7n5m9pL1hZ41GMoO4r2R0zLf8G7tess5ZDnAVt1mH1R4cEX9qsVLW3GRtYBqoZqyvTtQFYsZFRV1AO0A-TTCIMkDk70iQh1vAz7OGRyam_AgIU-ok0SMGCYXYx';

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson); 
}).catch(e => {
  console.log(e);
});

app.get("https://api.yelp.com/v3/businesses/search", (req, res) => console.log( res));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));