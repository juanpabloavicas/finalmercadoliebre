

const express = require('express');


const app = express();
app.use(express.static('public'));


app.listen(3000,()=>{
    console.log('servidor funcionando')
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/home.html');
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/views/home.html');
});


app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html');
});

app.get('/crearcuenta',(req,res)=>{
    res.sendFile(__dirname+'/views/crearcuenta.html');
});