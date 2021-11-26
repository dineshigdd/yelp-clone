const express = require("express");
const { getBusinsessInfo , getBussinessReview  } = require("../../controllers/business");
// const  {  } = require("../../controllers/business");
const router = express.Router();





router.get("/search",  getBusinsessInfo );
router.get("/:id",  getBussinessReview );



module.exports = router;
