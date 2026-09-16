let express = require('express');
let router = express.Router();

router.get("/viewemployees", (req, res) => {
    res.send("GET employees route");
});

router.post("/assign-task", (req, res) => {
    res.send("POST employees route");
});

router.delete("/delete-task", (req, res) => {
    res.send("DELETE employees route");
});
module.exports=router;


