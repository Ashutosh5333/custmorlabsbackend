const express = require("express");
const connectdatabase = require("./confg/db.connect");
const Usermodel = require("./models/user.model");
const cors = require("cors");
const SchemRouter = require("./routes/Schema.route");
 const app = express()

 app.use(express.json())
 app.use(cors({
     origin:"*"
 }))

 app.get("/" ,(req,res) =>{
     res.send("hello world")
 })


app.use(SchemRouter)

 app.listen(8000,async ()=>{
    try{
      await  connectdatabase;
      console.log("able to connect databse")
    }catch(err){
        console.log("err while connectdatabse",err)
    }
    console.log("listinig on port 8000")
})

