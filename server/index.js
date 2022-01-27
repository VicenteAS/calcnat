const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db= mysql.createPool({
    host: '172.15.9.149',
    user: 'conex_calc_Natur',
    password: 'kSs6YA2lgv1M7feQ',
    database: 'bd_Calculadora_Naturgy'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/porusoluz', (req, res) => {
    const sqlSelect =
     "SELECT * FROM porusoluz WHERE activo = 1 ";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/api/nocheluz', (req, res) => {
    const sqlSelect =
     "SELECT * FROM nocheluz WHERE activo = 1";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/api/compromiso', (req, res) => {
    const sqlSelect =
     "SELECT * FROM compromiso WHERE activo = 1";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/api/endesa', (req, res) => {
    const sqlSelect =
     "SELECT * FROM endesa WHERE activo = 1";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/api/iberdrola', (req, res) => {
    const sqlSelect =
     "SELECT * FROM iberdrola WHERE activo = 1";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/api/repsol', (req, res) => {
    const sqlSelect =
     "SELECT * FROM repsol WHERE activo = 1";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/api/holaluz', (req, res) => {
    const sqlSelect =
     "SELECT * FROM holaluz WHERE activo = 1";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/api/totalenergies', (req, res) => {
    const sqlSelect =
     "SELECT * FROM totalenergies WHERE activo = 1";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/api/porusogas', (req, res) => {
    const sqlSelect =
     "SELECT * FROM porusogas WHERE activo = 1";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});


app.get('/api/digitalgas', (req, res) => {
    const sqlSelect =
     "SELECT * FROM digitalgas WHERE activo = 1";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.listen(3001, () => {

    console.log("Server working on port 3001");
})