const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const registerRoute=require("./routes/register")
const loginRoute = require("./routes/login")

dotenv.config();


//creating express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




//Connect with db
mongoose.connect(process.env.MONGODB_URL , {
   
}).then(() => console.log('db connected'))
    .catch((err) => console.log("failed to connect", err));



//register api
app.use('/register', registerRoute);
   
//login api
app.use('/login', loginRoute);









//Health api
app.get("/health", (req, res) => {
    try {
        res.status(200).json({
            services: "job-listing-server",
            status: "active",
            time: new Date(),
        })
    } catch (err) {
        console.log(err);
    }
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);

})