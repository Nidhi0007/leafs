const express =require( "express");
const dotenv =require( "dotenv");
const route = require("./routes/index");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const seedData = require('./seed/user')
dotenv.config();

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/", route);
const port = process.env.PORT;
const url = process.env.URL;
// redis connection end

// mongodb connection
mongoose.connect(url).then(()=>{
    console.log("connected");
});
// to seed user data in db 
// seedData();

app.listen(port, function () {
    console.log('Example app listening on port 8000!');
  });
