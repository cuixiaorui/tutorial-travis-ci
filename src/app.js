const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send("hello express");
})


app.listen("8080",()=>{
    console.log("on the 8080 port")
})





