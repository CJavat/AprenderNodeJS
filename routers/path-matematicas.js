const express = require('express');
const routerMatematicas = express.Router();

const { matemanticas } = require('../datos/datos.js').infoCursos;

routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matemanticas));
});

routerMatematicas.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = matemanticas.filter(cursos => cursos.lenguaje === lenguaje);

    if(resultado.length === 0) return res.status(404).send(`El tema ${lenguaje} no ha sido encontrado.`);

    res.send(JSON.stringify(resultado));
});

module.exports = routerMatematicas;