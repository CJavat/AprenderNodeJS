const express = require('express');
const routerMatematicas = express.Router();

//* MIDDLEWARE
routerMatematicas.use(express.json());

const { matemanticas: matematicas } = require('../datos/datos.js').infoCursos;

routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas));
});

routerMatematicas.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = matematicas.filter(cursos => cursos.lenguaje === lenguaje);

    if(resultado.length === 0) return res.status(404).send(`El tema ${lenguaje} no ha sido encontrado.`);

    res.send(JSON.stringify(resultado));
});

//? POST
routerMatematicas.post('/', (req, res) => {
    let nuevaInfo = req.body;
    matematicas.push(nuevaInfo);
    res.send(JSON.stringify(matematicas));
});

//? PUT
routerMatematicas.put('/:id', (req, res) => {
    const infoActualizado = req.body;
    const id = req.params.id;
    const indice = matematicas.findIndex(cursos => cursos.id == id);

    if(indice >= 0) {
        matematicas[indice] = infoActualizado;
    }
    res.send(JSON.stringify(matematicas));
});

//? PATCH
routerMatematicas.patch('/:id', (req, res) => {
    const infoModificada = req.body;
    const id = req.params.id;
    const indice = matematicas.findIndex(cursos => cursos.id == id);

    if(indice >= 0) {
        const cursoModificado = matematicas[indice];
        Object.assign(cursoModificado, infoModificada);
    }
    res.send(JSON.stringify(matematicas));
});

//? DELETE
routerMatematicas.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = matematicas.findIndex(cursos => cursos.id == id);

    if(indice >= 0) {
        matematicas.splice(indice, 1);
    }
    res.send(JSON.stringify(matematicas));
});


module.exports = routerMatematicas;