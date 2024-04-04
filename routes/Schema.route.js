const express = require("express");
const { AddSchema, getschema, getallSchema } = require("../controller/AddScheme.controller");

const SchemRouter = express.Router();


SchemRouter.post("/usercreate",AddSchema)
SchemRouter.get("/getuser",getschema)
SchemRouter.get("/getschema",getallSchema)

module.exports=SchemRouter

