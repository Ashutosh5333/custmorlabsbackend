const UserModel = require("../models/user.model");


 const AddSchema =  async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json({
            status: "success",
            message: "Successfully added Schema",
            data: user
        });
    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            status: "error",
            message: "An error occurred while creating the user",
            error: err.message
        });
    }
};



  const getschema =  async (req, res) => {
    try {
        const user = await UserModel.findOne().sort({ _id: -1 }).limit(1);
        if (user) {
            res.status(200).json({
                status: "success",
                data: user
            });
        } else {
            res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }
    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch user",
            error: err.message
        });
    }
};



const getallSchema =  async (req, res) => {
    try {
        const user = await UserModel.find()
            res.status(200).json({
                status: "success",
                data: user
            });
       
    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch user",
            error: err.message
        });
    }
};

module.exports={AddSchema,getschema ,getallSchema}