const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    const TESTVal = process.env.TEST;
    res.send(`hello express test:${TESTVal}`);
})


app.listen("8080",()=>{
    console.log("on the 8080 port")
})





