// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 80;


// app.use('/static',express.static('static'));    

// app.set('view engine','pug');
// app.set('views',path.join(__dirname,'views'));

// app.get('/',(req,res)=>{
//     const con= "lol";
//     const params = {'title': 'Test app.',"content" : con};
//     res.status(200).render('index.pug',params);
// })

// app.listen(port,()=>{
//     console.log(`The app has started on port ${port}`);
// })

const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.use('/static',express.static('static'));

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const con = "pug is a kind of good engine.";
    const params= {'title':'another revision of wd',"content":con};
    res.status(200).render('index2.pug',params);
})

app.listen(port,()=>{
    console.log(`The app has started on port ${port}`);
})