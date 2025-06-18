const express = require('express');
const fs = require('fs');
const path = require("path");
const app = express();
const port = 80;

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('view enigne',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('gym.pug');
})

app.post('/',(req,res)=>{
    name=req.body.name;
    age=req.body.age;
    fee=req.body.fee;
    goal=req.body.goal;
    let opToWrite = `the name of the client is ${name},his age ${age} , fee: ${fee} , his/her goal : ${goal}`;
    fs.writeFileSync('output.txt',opToWrite);
    const msg = {'message':"your data has bewn submitted.."};
    res.status(200).render('gym.pug',msg);
})

app.listen(port,()=>{
    console.log(`The app has successfully launched in port ${port} .`);
})