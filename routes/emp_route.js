let express = require("express");
let router = express.Router();
let {users}=require("../models/users")

router.post("/register",async (req, res) => {
    console.log(req.body);
    let newuser=users(req.body);
    let result= await newuser.save();
    res.send(result);
});

router.post("/login", (req, res) => {
    res.send("login sucessfully");
});

router.get("/viewtask", (req, res) => {
    res.send("view task router");
});

router.put("/updatestatus", (req, res) => {
    res.send("updatestatus router");
});

module.exports = router;