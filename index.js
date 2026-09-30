let express = require("express");
let app = express();

let hrroutes = require("./routes/hr_route");
let emprouter = require("./routes/emp_route");
let mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/hrmanagement")
.then(()=>{
    console.log("connected with mongodb database")
}).catch((err)=>{
    console.log(err);
})

app.use(express.json());

app.use("/api/hr", hrroutes);
app.use("/api/emp", emprouter);

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
