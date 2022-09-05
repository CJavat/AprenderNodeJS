const infoCurso = {
    "titulo": "Aprende Node JS",
    "numVistas": 4562,
    "numLikes": 451,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};

// Objeto --> Cadena de caracteres.
// Cadena de caracteres en formato JSON.
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof(infoCursoJSON));

// Cadena de caracteres --> Objeto.
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof(infoCursoObjeto));
console.log(infoCursoObjeto.titulo);