const express = require('express');
const path = require('path');
const app = express();
const port = 80;


app.use('/static',express.static('static'));

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const con= "this is on the internet";
    const params = {'title': 'pug is a good template engine.',"content" : con};
    res.status(200).render('index.pug');
})

app.listen(port,()=>{
    console.log(`The app has started on port ${port}`);
})
