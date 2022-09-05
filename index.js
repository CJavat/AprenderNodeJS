/* const operaciones = require('./operaciones.js');
console.log(operaciones.multiplicar(2, 5)); */

/* const os = require('os');
console.log('Memoria Libre: ', os.freemem());
console.log('Memoria Total: ', os.totalmem()); */

/* const fs = require('fs');
fs.writeFile('./texto.tx', 'Linea 1.', (err) => { // Código asíncrono.
    if(err) {
        console.log(err);
    }
    else {
        console.log("Archivo creado exitosamente.");
    }
});

console.log('Última linea de código.');

fs.readFile('./texto.tx', (err, data) => {
    if(err) {
        console.log("Ha ocurrido un error.");
    }
    console.log(data.toString());
}); */

/* const http = require('http');
console.log(http);

const handleServer = (req, res) => {
    res.writeHead(200, ({'content-type' : 'text/html'}));
    res.write('<h1>Hola mundo.</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, () => {
    console.log('Servidor en el puerto 3000.');
}); */

/* const colors = require('colors'); // Obtener el modulo de Colors
console.log('Verde'.green); */

const express = require('express');

const server = express();
server.get('/', (req, res) => {
    res.send('<h1> Hola Mundo. </h1>');
    res.end();
})

server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000.");
});