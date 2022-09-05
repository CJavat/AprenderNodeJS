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

/* const express = require('express');

const server = express();
server.get('/', (req, res) => {
    res.send('<h1> Hola Mundo. </h1>');
    res.end();
})

server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000.");
}); */


//const saludos = require('./saludos.js'); // Importar varios elementos.

//console.log(saludos.saludar("Dani")); 
//console.log(saludos.saludarHolaMundo());

/* const { saludarHolaMundo, saludar } = require('./saludos.js'); // Importar un solo elemento.

console.log(saludarHolaMundo());
console.log(saludar("Dani")); */

/* MÓDULO CONSOLE */
/* console.log("Hola Mundo");
console.warn("Puede que haya un error...");
//console.error("Ha ocurrido un error.");
console.error(new Error("Ocurrió un error.")); */

/* MÓDULO PROCESS */
/* console.log(process);
console.log(process.env);
console.log(process.argv);
console.log(process.memoryUsage()); */

//[node, indexedDB.js, 6, 7];
//  0         1        2  3

/* MÓDULE OS */
/* const os = require('os');

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo()); */

/* MÓDULO TIMERS */
// setTimeout(función, retraso, argumentos1, argumento2..., argumentoN);
// setImmediate(función, argumento1, argumento2, argumentoN);
// setInterval(función, Intervalo, argumento1, argumento2, argumentoN);


/* function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
} */

/* function sumar(a, b) {
    console.log(a + b);
} */

//setTimeout(mostrarTema, 2000, 'NodeJS');
//setTimeout(sumar, 2000, 5, 5);

/* console.log('Antes de setImmediate.');

setImmediate(mostrarTema, 'NodeJS');

console.log('Después de setImmediate.'); */

//setInterval(mostrarTema, 2000, 'NodeJS');
//setInterval(sumar, 2000, 3, 4);

/* MÓDULO FS */
const { error } = require('console');
const fs = require('fs');
/* fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if(err) {
        //console.log(err);
        throw error;
    }
    console.log(contenido);
});
 */

/* fs.rename('index.html', 'main.html', (err) => {
    if(err) throw err;
    console.log('Nombre cambiado exitosamente.');
}); */

// Agregar contenido al final de un archivo.
/* fs.appendFile('index.html', '<h3> Hola </h3>', (err) => {
    if(err) throw err;
    console.log('Archivo actualizado.')
}); */

// Reemplazar todo el contenido del archivo.
/* fs.writeFile('index.html', 'Contenido nuevo.', (err) => {
    if(err) throw err;
    console.log('Archivo reemplazado exitosamente.');
}); */

// Eliminar archivos.
/* fs.unlink('prueba.html', (err) => {
    if(err) throw err;
    console.log('Archivo eliminado exitosamente.');
}); */

/* npm y NODE.JS */
// npm init --> Crea un archivo package.json
// npm init --yes --> Crea un archivo package.json con todos los valores por defecto.

/* JSON */






















