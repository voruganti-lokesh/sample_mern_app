let express = require("express");
let cors = require("cors");
let app = express();

let hrroutes = require("./routes/hr_route");
let emprouter = require("./routes/emp_route");
let mongoose=require('mongoose');
app.use(cors())
mongoose.connect("mongodb://localhost:27017/hrmanagement")
.then(()=>{
}).catch((err)=>{
})

app.use(express.json());

app.use("/api/hr", hrroutes);
app.use("/api/emp", emprouter);

app.listen(3000, () => {
});
