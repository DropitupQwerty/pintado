const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
require("dotenv").config();

const authRouter  = require('./routes/Auth')


app.use('/auth' , authRouter)



app.listen(5000 , () => {
    console.log("running at PORT:5000");
}
)