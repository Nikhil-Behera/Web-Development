const express = require('express');
const path= require("path");
const app = express();
const port = 80;

//express related stuff.
app.use('/static',express.static('static'));

//pug related stuff.
app.set('view engine','pug');
app.set('views' , path.join(__dirname,'views') )

//endpoints.
app.get('/',(req,res)=>{
    const con = "this is on the internet."; 
    const params = {'title': 'pug is a good template engine.',"content" : con};
    res.status(200).render('index.pug',params);
})

//server started
app.listen(port,()=>{
    console.log(`the app has successfully started on the port  ${port}`);
})