let express = require("express");
let router = express.Router();
let bcrypt = require('bcrypt');
let { users } = require("../models/users");

router.post("/register", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new users({ ...req.body, password: hashedPassword });
    const result = await newUser.save();
    res.send(result);
});

router.post("/login", async (req, res) => {
    const result = await users.findOne({ email: req.body.email });
    if (result) {
        const matchpass = await bcrypt.compare(req.body.password, result.password);
        if (matchpass) {
            res.send({ "msg": "login successful",
                "user": {
                    "id": result._id,
                    "name": result.name,
                    "email": result.email,
                    "role": result.role
                }

             });
        } else {
            res.send({ "msg": "login failed" });
        }
    } else {
        res.send({ "msg": "user not found" });
    }
});

router.get("/viewtask", (req, res) => {
    res.send("view page called");
});

router.put("/updatestatus", (req, res) => {
    res.send("updatestatus page called");
});

router.patch("/updateprofile/:id", async (req, res) => {
    let data = req.body;
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    let result = await users.findByIdAndUpdate(req.params.id, data, { new: true });
    res.send(result);
});

module.exports = router;
