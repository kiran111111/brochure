
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
console.log(PORT)

// serve static files
app.use(express.static(__dirname + "/public"));

app.listen(PORT,()=>{
 console.log(`App is running at port `+PORT);
})