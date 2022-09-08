const express = require('express');
const routerProgramacion = express.Router();

//* MIDDLEWARE
routerProgramacion.use(express.json());

const { programacion } = require('../datos/datos.js').infoCursos;

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = programacion.filter(cursos => cursos.lenguaje === lenguaje);

    if(resultado.length === 0) {
        return res.status(404).send(`El lenguaje ${lenguaje} que estás buscando no se ha encontrado.`);
    }

    res.send(JSON.stringify(resultado));
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultado = programacion.filter(cursos => cursos.lenguaje === lenguaje && cursos.nivel === nivel);

    if(resultado.length === 0) {
        return res.status(404).send(`El lenguaje ${lenguaje} con el nivel ${nivel} que estás buscando no se ha encontrado.`);
    }
});

//? POST
routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
});

//? PUT
routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0) {
        programacion[indice] = cursoActualizado;
    }
    res.send(JSON.stringify(programacion));
});

//? PATCH
routerProgramacion.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0) {
        const cursoModificado = programacion[indice];
        Object.assign(cursoModificado, infoActualizada);
    }
    res.send(JSON.stringify(programacion));
});

//? DELETE
routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0) {
        programacion.splice(indice, 1);
    }
    res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;