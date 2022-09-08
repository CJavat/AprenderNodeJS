const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.get('/', (req, res) => {
    res.send('Mi primer servidor.');
});

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    port: 3306,
    database: "cjavatgamers"
});

connection.connect(err => {
    if(err) {
        return console.error('Error al conectar: ' + err.stack);
    }
    console.log('conectado con el id' + connection.threadId);
});
connection.query('SELECT * FROM usuarios', function (error, results, fields) {
    //console.log(error);
    console.log(results);
    //console.log(fields);
    //module.exports = results;

    app.get('/db/users', (req, res) => {
        res.status(200).send(JSON.stringify(results));
    })

});

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`);
});

//console.log(connection.query('SELECT * FROM usuarios'));
//console.log(connection.connect());