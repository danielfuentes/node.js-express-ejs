const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/home.html'));
})

app.get('/registro', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'views/registro.html'));
})

app.post('/datos', (req,res)=>{
    res.send(req.body)
})

app.listen(3001, console.log('Servidor corriendo en el puerto 3001'));
