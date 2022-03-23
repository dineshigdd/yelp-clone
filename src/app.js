const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const businessesRoutes = require("./routes/api/business");
// const reviewAPI = require("./routes/api/review");
const cors = require('cors');



//setup some middleware for body parser:
// express.json()
// express.urlencoded({ extended: true })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get('test',()=>{
    console.log("test")
})
app.use('/businesses', businessesRoutes );
// app.use('/businesses/', reviewAPI);
// const businessApiCall = async () => {
//    const response = await businessesAPI.getBusinseeInfo();
//    console.log( response.data.data);
// }

// businessApiCall();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));