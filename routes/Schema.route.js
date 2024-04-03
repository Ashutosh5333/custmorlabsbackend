const express = require("express");
const { AddSchema, getschema } = require("../controller/AddScheme.controller");

const SchemRouter = express.Router();


SchemRouter.post("/usercreate",AddSchema)
SchemRouter.get("/getuser",getschema)

module.exports=SchemRouter