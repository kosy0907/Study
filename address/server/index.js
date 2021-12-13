const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool ({
    host: '127.0.0.1',
    user: 'root',
    password: 'qwer123',
    database: 'addressdb'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req,res) => {
    const sqlSelect = "SELECT * FROM address_table"
    db.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result);
    });
});

app.post('/api/insert', (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const sqlInsert = "INSERT INTO address_table (name, address) VALUES (?,?)" 
    db.query(sqlInsert, [name, address], (err, result) => {
        console.log(result);
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("running on port 3001");
})