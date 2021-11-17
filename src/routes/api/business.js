const express = require("express");
const getBusinsessInfo = require("../../controllers/business");
const router = express.Router();


// const BASE_URL = "https://api.yelp.com/v3/businesses/search"


router.get("/",  getBusinsessInfo);




module.exports = router;
