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

//! MÓDULO CONSOLE */
/* console.log("Hola Mundo");
console.warn("Puede que haya un error...");
//console.error("Ha ocurrido un error.");
console.error(new Error("Ocurrió un error.")); */

//! MÓDULO PROCESS */
/* console.log(process);
console.log(process.env);
console.log(process.argv);
console.log(process.memoryUsage()); */

//[node, indexedDB.js, 6, 7];
//  0         1        2  3

//! MÓDULE OS */
/* const os = require('os');

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo()); */

//! MÓDULO TIMERS */
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

//! MÓDULO FS */
// const { error } = require('console');
// const fs = require('fs');
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

//! EVENTS EMITTERS */
/* const EventEmitter = require('events');
//console.log(EventEmitter);
const emisorProductos = new EventEmitter(); */

//! EVENT HANDLERS */
/* emisorProductos.on('compra', (total, numeroProductos) => { // Está esperando a que se emita el evento para dispararse la función.
    //console.log("Se realizó una compra.");
    console.log(`Se realizó una compra por $${total} pesos mexicanos.`);
    console.log(`Por haber comprado ${numeroProductos} productos.`);
});

//emisorProductos.emit('compra'); // Emitir el evento para que se disparé el .on().
emisorProductos.emit('compra', 500, 5); // Emitir el evento para que se disparé el .on(). */

//! PROMESAS */
/* const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(promesaCumplida) resolve("Promesa Cumplida.");
        else reject("Promesa Rechazada.");
    }, 1000);
});

//miPromesa.then((valor) => {
//    console.log(valor);
//});

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}

const manejarPromesaRechazada = razonRechazo => {
    console.log(razonRechazo)
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

console.log("Hola mundo"); */

//! PRÁCTICA PROMESAS */
/* const estatusPedido = () => {
    const estatus = Math.random() < 0.5;
    return estatus;
}

const miPedidoPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()) resolve("Pedido exitoso, la comida va en camino.");
        else reject("Ocurrió un error. Por favor, intenta nuevamente.");
    }, 3000);
});

const pedidoExitoso = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
}

const pedidoRechazado = (mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
}

//miPedidoPizza.then(pedidoExitoso, pedidoRechazado);


miPedidoPizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .then(null, (mensajeDeRechazo) => {
        console.log(mensajeDeRechazo);
    }); */

//! CATCH */
/* const estatusPedido = () => {
    const estatus = Math.random() < 0.5;
    return estatus;
}

const miPedidoPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()) resolve("Pedido exitoso, la comida va en camino.");
        else reject("Ocurrió un error. Por favor, intenta nuevamente.");
    }, 3000);
});

const pedidoExitoso = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
}

const pedidoRechazado = (mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
}

miPedidoPizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeRechazo) => {
        console.log(mensajeDeRechazo);
    });
 */

//! ASYNC AWAIT */
// function ordenarProducto(producto) {
//     return new Promise((res, rej) => {
//         console.log("Ordenando: " + producto);
//         setTimeout(()=>{
//             if(producto === 'taza') res("Ordenando taza.");
//             else rej("Este producto no está disponible."); 
//         }, 2000);
//     });
// }

// function procesarPedido(respuesta) {
//     return new Promise(res => {
//         console.log("Procesando respuesta...");
//         console.log(`La respuesta fue: "${respuesta}"`);
//         setTimeout(()=>{
//             res("Gracias por tu compra.");
//         }, 4000);
//     });
// }
//* ENCADENAR PROMESAS */
// ordenarProducto('taza')
//     .then(respuesta => {
//         console.log("Respuesta recibida.");
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(error => {
//         console.log(error);
//     });

/* async function realizarPedido(pedido) {
    try {
        const respuesta = await ordenarProducto(pedido);
        console.log("Respuesta recibida.");
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }
    catch(error) {
        console.log(error);
    };
}

realizarPedido('taza'); */

/* HTTP */
/* const http = require('http');
const servidor = http.createServer((req, res) => {
    res.end('<h1> Hola Mundo. </h1>');
});

const PORT = 9090;

servidor.listen(9090, () => {
    console.log("El servidor esta escuchando en el puerto: " + PORT);
}); */

/* REQ & RES */
/* const http = require('http');
const server = http.createServer((req, res) => {
    // console.log("--> Request(req)");
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    console.log("--> Response(res)");
    console.log(res.statusCode);
    res.setHeader('content-type', 'text/html');
    console.log(res.getHeaders());
    res.end('<h1> Hola Mundo. </h1>');
});
const PORT = 9090;

server.listen(PORT, () => {
    console.log("El servidor está escuchando en el puerto: " + PORT + "...");
}); */

/*  EXTENSIÓN COMENTARIOS. */
/*
    * -----> Importante.
    ! -----> Error.
    ? -----> Alguna duda
    TODO --> COSAS POR HACER.
*/

//! ESTRUCTURA DE UNA URL */
//*   https://    www.     sitio          .com            /login.php/
//! |protocolo|subdominio|dominio|TLD - Top-Level Domain|Path o Ruta.
//? ?q = cursos+de+node --> Es una consulta.
//? ?q = cursos+de+node&cursos+de+js --> Consulta de 2 o más.

//! MÓDULO URL */
/* const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miURL.hostname);
console.log(miURL.pathname);
console.log(miURL.searchParams);
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nivel')); */

//! ROUTING EN NODE.JS */
/* const http = require('http');
//const cursos = require('./cursos.js')
const { infoCursos } = require('./cursos.js')

const servidor = http.createServer((req, res) => {
    const metodo = req.method;
    
    switch(metodo) {
        case 'GET': 
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        case 'PUT':
            return manejarSolicitudPUT(req, res);
        case 'DELETE':
            return manejarSolicitudDELETE(req, res);
        default:
            res.statusCode = 501;
            console.log(`El método no puede ser manejado por el servidor: ${metodo}`);
    }
});

function manejarSolicitudGET(req, res) {
    const camino = req.url;

    if(camino === '/') {
        res.writeHead(200, {'Content-Type':'application/json'}); // Escribir un header,
        //res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creados con NodeJS.');
    }
    else if(camino === '/cursos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos));
    }
    else if(camino === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.programacion));
    }
    else if(camino === '/cursos/matematicas') {
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.matemanticas));
    }
    else{
        res.statusCode = 404;
        return res.end("El sitio solicitado no existe.");
    }
}

function manejarSolicitudPOST(req, res) {
    const camino = req.url;

    if(camino === '/cursos/programacion') {
        res.statusCode = 200;
        console.log('El servidor recibió una solicitud POST para /cursos/programacion');
        return res.end('El servidor recibió una solicitud POST para /cursos/programacion');
    }
    else if(camino === '/cursos/matematicas') {
        let cuerpo = '';
        req.on('data', (contenido) => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof(cuerpo));
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof(cuerpo));
            console.log(cuerpo.titulo);
            
            res.end('El servidor recibió una solicitud POST para /cursos/matematicas');
        });
    }
}

function manejarSolicitudPUT(req, res) {
    const camino = req.url;

    if(camino === '/cursos/matematicas') {
        res.statuscode = 200;
        console.log('El servidor recibió una solicitud PUT para la ruta /cursos/matematicas')
    }
}

function manejarSolicitudDELETE(req, res) {
    const camino = req.url;

    if(camino === '/cursos/matematicas') {
        res.statuscode = 200;
        console.log('El servidor recibió una solicitud DELETE para la ruta /cursos/matematicas')
    }
}


PUERTO = 9090;

servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto: ${PUERTO}`);
}); */

//! NODEMON */
//? Sirve para que se actualicen los cambios del servidor sin tener que cerrar el servidor y volverlo activar.
//? para instalarlo se debe de escribir:
/! npm install -g nodemon */
const { application } = require("express");
//? Y para ejecutarlo es: nodemon app.js (Lo único que cambia es el node app.js)*/

//! EXPRESS */
//! RUTAS CON EXPRESS */
// const express = require('express');
// const { infoCursos } = require('./cursos.js');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('Mi primer servidor con Express. Curso NodeJS.');
// });

// app.get('/api/cursos', (req, res) => {
//     res.send(JSON.stringify(infoCursos));
// });
// app.get('/api/cursos/programacion', (req, res) => {
//     res.send(JSON.stringify(infoCursos.programacion));
// });
// app.get('/api/cursos/matematicas', (req, res) => {
//     res.send(JSON.stringify(infoCursos.matemanticas));
// });

// const PORT = process.env.PORT || 9090; //? process.env.PORT --> Es para obtener dinámicamente el puerto que el hosting estará asignandole a mi web.

// app.listen(PORT, () => {
//     console.log("El servidor esta escuchando en el puerto " + PORT + "...");
// });

//! PARÁMETROS DE RUTAS CON EXPRESS */
/* const express = require('express');
const { infoCursos } = require('./cursos.js');

const app = express();

//* CURSOS DE PROGRAMACION.

app.get('/api/cursos/programacion/:lenguaje', (req, res) => { //? Para hacer una ruta dinámica.
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(cursos => cursos.lenguaje === lenguaje);

    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    res.send(JSON.stringify(resultados));
});

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));

});

//* CURSOS DE MATEMÁTICAS.
app.get('/api/cursos/matematicas/:tema', (req, res) => { //? Para hacer una ruta dinámica.
    const tema = req.params.tema;
    const resultados = infoCursos.matemanticas.filter(cursos => cursos.lenguaje === tema);

    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.send(JSON.stringify(resultados));
});

const PORT = process.env.PORT || 9090; //? process.env.PORT --> Es para obtener dinámicamente el puerto que el hosting estará asignandole a mi web.

app.listen(PORT, () => {
    console.log("El servidor esta escuchando en el puerto " + PORT + "...");
}); */

//! PARÁMETROS QUERY */
// const express = require("express");
// const { infoCursos } = require('./cursos.js');
// const app = express();

// app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
//     const lenguaje = req.params.lenguaje;
//     const nivel = req.params.nivel;

//     const resultados = infoCursos.programacion.filter(cursos => cursos.lenguaje === lenguaje);

//     if(resultados.length === 0) {
//         return res.status(404).send(`No se encontraron cursos de ${lenguaje} del nivel ${nivel}`);
//     }

//     if(req.query.ordenar == 'vistas') {
//         return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
//     }

//     res.send(JSON.stringify(resultados));

// });

// const PORT = process.env.PORT || 9090;

// app.listen(PORT, () => {
//     console.log(`El servidor está escuchando por el puerto ${PORT}...`);
// })

//! ROUTERS EN EXPRESS */
// const express = require('express');
// const app = express();
// const { infoCursos } = require('./cursos');

// // ROUTERS
// const routerProgramacion = express.Router();
// const routerMatematicas = express.Router();
// app.use('/api/cursos/programacion', routerProgramacion);
// app.use('/api/cursos/matematicas', routerMatematicas);

// //* PATH PROGRAMACIÓN.
// routerProgramacion.get('/', (req, res) => {
//     res.send(JSON.stringify(infoCursos.programacion));
// });

// routerProgramacion.get('/:lenguaje', (req, res) => {
//     const lenguaje = req.params.lenguaje;
//     const resultado = infoCursos.programacion.filter(cursos => cursos.lenguaje === lenguaje);

//     if(resultado.length === 0) {
//         return res.status(404).send(`El lenguaje ${lenguaje} que estás buscando no se ha encontrado.`);
//     }

//     res.send(JSON.stringify(resultado));
// });

// routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
//     const lenguaje = req.params.lenguaje;
//     const nivel = req.params.nivel;
//     const resultado = infoCursos.programacion.filter(cursos => cursos.lenguaje === lenguaje && cursos.nivel === nivel);

//     if(resultado.length === 0) {
//         return res.status(404).send(`El lenguaje ${lenguaje} con el nivel ${nivel} que estás buscando no se ha encontrado.`);
//     }
// });

// //* PATH MATEMÁTICAS.
// routerMatematicas.get('/', (req, res) => {
//     res.send(JSON.stringify(infoCursos.matemanticas));
// });

// routerMatematicas.get('/:lenguaje', (req, res) => {
//     const lenguaje = req.params.lenguaje;
//     const resultado = infoCursos.matemanticas.filter(cursos => cursos.lenguaje === lenguaje);

//     if(resultado.length === 0) return res.status(404).send(`El tema ${lenguaje} no ha sido encontrado.`);

//     res.send(JSON.stringify(resultado));
// });

// const PORT = process.env.PORT || 9090;
// app.listen(PORT, () => {
//     console.log(`El servidor está escuchando en el puerto ${PORT}`);
// });

//! ROUTERS EN DISTINTOS ARCHIVOS */
const express = require('express');
const app = express();

const { infoCursos } = require('./datos/datos.js');

const routerMatematicas = require('./routers/path-matematicas.js');
const routerProgramacion = require('./routers/path-programacion.js');


app.use('/api/cursos/matematicas', routerMatematicas);
app.use('/api/cursos/programacion', routerProgramacion);

app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express.');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});

//! POST, PUT, PATCH y DELETE */





















