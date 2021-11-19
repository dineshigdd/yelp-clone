
const yelp = require('yelp-fusion');
const axios = require('axios');
const apiKey = 'DP73lJ7n5m9pL1hZ41GMoO4r2R0zLf8G7tess5ZDnAVt1mH1R4cEX9qsVLW3GRtYBqoZqyvTtQFYsZFRV1AO0A-TTCIMkDk70iQh1vAz7OGRyam_AgIU-ok0SMGCYXYx';
const client = yelp.client(apiKey);

const ex = { "businesses":[{
    "id": "siuAT2O_VdNBdboJWbiV-Q",
    "alias": "tacos-tacuba-van-nuys",
    "name": "Tacos Tacuba",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/O-cVLgozwjlW5udU3LwNdw/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/tacos-tacuba-van-nuys?adjust_creative=aFkOwjEgzWErXwZvs0G8Rw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aFkOwjEgzWErXwZvs0G8Rw",
    "review_count": 80,
    "categories": [
      {
             "alias": "foodtrucks",
              "title": "Food Trucks"
         },
          {
             "alias": "tacos",
             "title": "Tacos"
          }
      ],
      "rating": 4.5,
      "coordinates": {
      "latitude": 34.1715097247137,
      "longitude": -118.447147193649
     },
      "transactions": [],
      "price": "$",
      "location": {
      "address1": "14440 Burbank Blvd",
      "address2": null,
      "address3": "",
      "city": "Van Nuys",
      "zip_code": "91401",
      "country": "US",
      "state": "CA",
      "display_address": [
      "14440 Burbank Blvd",
             "Van Nuys, CA 91401"
          ]
      },
     "phone": "",
     "display_phone": "",
     "distance": 2543.1801056729214
 },
 {
    "id": "_GxXKKCjz5jYDjpQs_KPZQ",
    "alias": "costa-grande-van-nuys-3",
    "name": "Costa Grande",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/1LucOHxSPY-efnVrxRsi7Q/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/costa-grande-van-nuys-3?adjust_creative=aFkOwjEgzWErXwZvs0G8Rw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=aFkOwjEgzWErXwZvs0G8Rw",
    "review_count": 1098,
    "categories": [
        {
           "alias": "mexican",
           "title": "Mexican"
        }
    ],
    "rating": 4.5,
    "coordinates": {
        "latitude": 34.2002243341503,
        "longitude": -118.46709713691
    },
    "transactions": [
        "delivery",
        "pickup"
    ],
    "price": "$",
    "location": {
        "address1": "7139 Sepulveda Blvd",
        "address2": "",
        "address3": "",
        "city": "Van Nuys",
        "zip_code": "91405",
        "country": "US",
        "state": "CA",
        "display_address": [
            "7139 Sepulveda Blvd",
            "Van Nuys, CA 91405"
        ]
    },
    "phone": "+18187790131",
    "display_phone": "(818) 779-0131",
    "distance": 488.41731431036834
}

]
};

 
module.exports = getBusinsessInfo = (  req, res ) =>
{
    // res.send( ex );
    // const searchRequest = {
    //     term:req.query.term,
    //     location: req.query.location,
    //     limit:3
    // }
 
  
    
    //     client.search(searchRequest).then(response => {
    //         const firstResult = response.jsonBody.businesses[0];
    //         const prettyJson = JSON.stringify(firstResult, null, 4);
    //         console.log(prettyJson);            
    //         res.send( prettyJson );
    //         }).catch(e => {
    //           console.log(e);
    //       });

    axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: {
          Authorization: `Bearer ${apiKey}`
     },
        params: {
          term:req.query.term,
          location: req.query.location ,
          limit:2        
     }})
     .then((response) => res.send(response.data))
     .catch((err) => console.log(err))
    
    

}
