// const sqlite3 = require('sqlite3');
// let db = new sqlite3.Database('proyecto-backend');
// // db.run('CREATE TABLE task(id int AUTO_INCREMENT, description varchar(255))');
// db.close();

const express = require('express');
const bodyParser = require('body-parser');
const Sequilize = require('sequilize');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Sequilize(nombre-bd-datos, usuario, clave)
const sequilize = new Sequilize('proyecto-backend', null, null, {
    dialect: 'sqlite',
    storage: './proyecto-backend'
});

app.post('/pendientes', function(req, res){
    
    res.send('Inserción finalizada');
});

app.listen(3000);

