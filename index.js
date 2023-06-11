const express = require('express');
const server = express();
const port = process.env.PORT || 3000;
const consulta = require('./src/data/consulta.json');

server.get('/consulta',(req,res)=>{
    return res.json(consulta)
    
});

server.listen(port, () => {
console.log('Servidor está funcionando...')
});
