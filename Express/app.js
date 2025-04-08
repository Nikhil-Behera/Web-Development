const express = require('express');
const app = express();
const port = 80;

app.get("/" , (req,res)=>{
    res.send("this is my first express app.");
});

app.get("/about" , (req,res)=>{
    res.send("this is my about page of the app.");
});

app.post("/about" , (req,res)=>{
    res.send("this is my about page of the app.");
});

app.listen(port,()=>{
    console.log(`the app has successfully started on the port  ${port}`);
})