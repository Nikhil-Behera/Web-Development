const express = require('express');
const app = express();
const port = 3000;

app.get("/" , (req,res)=>{
    res.send("this is my first express app.");
});

app.get("/about" , (req,res)=>{
    res.send("this is my about page of the app.");
});

app.post("/about" , (req,res)=>{
    res.send("this is my about page of the app made through express.");
});

app.get("/home" , (req,res)=>{
    res.send("This is the h9ome page of the app.");
});

app.listen(port,()=>{
    console.log(`the app has successfully started on the port  ${port}`);
})