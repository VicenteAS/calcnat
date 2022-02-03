const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* const db= mysql.createPool({
    host: '172.15.9.149',
    user: 'conex_calc_Natur',
    password: 'kSs6YA2lgv1M7feQ',
    database: 'bd_Calculadora_Naturgy'
})

*/
    const db= mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'calculadora_naturgy'
    })

    app.get('/tarifas_luz', (req, res) => {
        const sqlSelect =
         "SELECT * FROM tarifas_luz WHERE activo=1";
        db.query(sqlSelect, (err, result) => {
            
            res.send(result)
            console.log(result);
        });    
    });
    
    app.get('/tarifas_gas', (req, res) => {
        const sqlSelect =
         "SELECT * FROM tarifas_gas WHERE activo=1";
        db.query(sqlSelect, (err, result) => {
            
            res.send(result)
            console.log(result);
        });    
    });
    app.get('/datos_luz', (req, res) => {
        const sqlSelect =
         "SELECT * FROM datos_luz";
        db.query(sqlSelect, (err, result) => {
            
            res.send(result)
            console.log(result);
        });    
    });
    app.get('/datos_gas', (req, res) => {
        const sqlSelect =
        "SELECT dg.* FROM datos_gas dg INNER JOIN tarifas_gas tg ON dg.id_tarifa_gas = tg.id_tarifa WHERE tg.activo=1 AND dg.activo=1";;
        db.query(sqlSelect, (err, result) => {
            res.send(result)
            console.log(result);
        });    
    });

    app.get

app.listen(3001, () => {

    console.log("Server working on port 3001");
})