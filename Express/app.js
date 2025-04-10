const express = require('express');
const path= require("path");
const app = express();
const port = 80;

//for serving static files.
app.use('/static',express.static('static'));

//set the template engien as pug.
app.set('view engine','pug');

//set the views directory.
app.set('views' , path.join(__dirname,'views') )

//our pug demo endpoint
app.get('/', (req, res) => {
    res.status(200).render('demo', { title: 'Hey there', message: 'Hello there and thanks for telling me how to use pug..!' });
});

app.get('/' , (req,res) =>{
    res.status(200).render('all',{title:'css page' , message : 'this is the css file.' });
})

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