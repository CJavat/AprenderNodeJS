const express = require('express');
const morgan = require('morgan');
const app = express();

app.use('/holamundo', express.static('public')); // PÁGINAS ESTÁTICAS.

//! MIDDLEWARE */ // Siempre tienen que estar antes de las rutas para que funcione correctamente.
/* app.use((req, res, next) => {
    console.log(req.url)
    next();ss
})

app.use((req, res, next) => {
    console.log('Ha pasado por esta funcion.');
    next();
}); */

//* MIDDLEWARE DEL MODULO: MORGAN */
// app.use(morgan('combined'));
// app.use(morgan('common'));
// app.use(morgan('dev'));
// app.use(morgan('short'));
// app.use(morgan('tiny'));

//! Configuraciones para el server de Express */
app.set('appName', 'Mi primer server'); //* Primer parámetro es la variable, y el segundo parámetro es el valor de esa variable.

//* TEMPLATES */
app.set('views', __dirname + '/views'); //* Para configurar un templates primero se necesita poner en donde está ubicado esa plantilla.
app.set('view engine', 'ejs'); //* Para configurar la plantilla que se va a usar.

//! ROUTING */
// app.get('/', (req, res) => {
//     //res.send("Hola Mundo");
//     res.render('index.ejs'); //? Cuando se usa un templates, esta es la forma para incluirlos.
// });

// app.get('/login', (req, res) => {
//     //res.send('Aqui va el login.');
//     res.render('login.ejs'); //? Cuando se usa un templates, esta es la forma para incluirlos.
// });

//* PARA IMPLEMENTAR EL ERROR 404 NOT FOUND A TODAS LAS RUTAS QUE NO EXISTEN. (Tiene que estar al final de todas las rutas).
// app.get('*', (req, res) => {
//     res.status(404).send("ERROR 404: NOT FOUND.");
// });

//! MODULO ROUTER */
const router = express.Router();
router.get('/', (req, res) => {
    //res.send("Hola Mundo");
    res.render('index.ejs'); //? Cuando se usa un templates, esta es la forma para incluirlos.
});

router.get('/login', (req, res) => {
    //res.send('Aqui va el login.');
    res.render('login.ejs'); //? Cuando se usa un templates, esta es la forma para incluirlos.
});
app.use(router);

//! API-REST */
const API = require('./api');
app.use('/api', API);

//* PARA IMPLEMENTAR EL ERROR 404 NOT FOUND A TODAS LAS RUTAS QUE NO EXISTEN. (Tiene que estar al final de todas las rutas).
app.get('*', (req, res) => {
    res.status(404).send("ERROR 404: NOT FOUND.");
});















const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}...`);
    console.log('Nombre del servidor: ' + app.get('appName')); //* Para obtener la variable que hemos asignado arriba en las cofig. con "app.set".
}); 























