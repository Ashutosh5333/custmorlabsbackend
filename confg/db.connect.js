
const mongoose = require("mongoose")
require("dotenv").config()

const connectdatabase = mongoose.connect(process.env.mongourl)

module.exports=connectdatabase