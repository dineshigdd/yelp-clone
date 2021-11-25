const express = require("express");
const getBussinessReview = require("../../controllers/review");
const router = express.Router();





router.get("/",  getBussinessReview );




module.exports = router;
