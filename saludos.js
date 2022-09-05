function saludar(name) {
    return `Hola ${name}, ¿cómo estás?`;
}

function saludarHolaMundo() {
    return 'Hola Mundo.';
}

/* module.exports.saludar = saludar; // Exportar Elemento.
module.exports.saludarHolaMundo = saludarHolaMundo; */

module.exports = { // Forma de importar muchas a la vez.
    saludar : saludar,
    saludarHolaMundo : saludarHolaMundo
};


