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
app.use(cors());
// app.use( (req, res, next ) =>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })
app.use(bodyParser.json());


app.use('/businesses', businessesRoutes );
// app.use('/businesses/', reviewAPI);
// const businessApiCall = async () => {
//    const response = await businessesAPI.getBusinseeInfo();
//    console.log( response.data.data);
// }

// businessApiCall();


if( process.env.NODE_ENV == 'production'){
    app.use( express.static('../frontend/build'));
    app.get('/', ( req, res ) =>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

module.exports = app;
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));