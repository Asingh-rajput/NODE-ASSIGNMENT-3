const { response } = require("express");
const express=require("express");
const { request } = require("http");
const app = express();

app.listen(5000,()=>{
    console.log("displaying the content of the index.html file.")
});

app.get("/abc",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});