
const express = require("express");
const app = express();


// serve static files
app.use(express.static(__dirname + "/public"));

app.listen(PORT,()=>{
 console.log(`App is running at port `+PORT);
})