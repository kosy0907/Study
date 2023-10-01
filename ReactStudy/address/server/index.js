const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const { application } = require('express');

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

//주소 추가
app.post('/api/insert', (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const sqlInsert = "INSERT INTO address_table (name, address) VALUES (?,?)";
    db.query(sqlInsert, [name, address], (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
});

//주소 삭제
app.delete('/api/delete/:name', (req, res) => {
    const name = req.params.name;

    const sqlDelete = "DELETE FROM address_table WHERE name = ?";
    db.query(sqlDelete, name, (err, result) => {
        console.log(result);
        console.log(err);
    });
});

//주소 수정
app.put('/api/update', (req, res) => {
    const name = req.body.name;
    const address = req.body.address;

    const sqlUpdate = "UPDATE address_table SET address = ? WHERE name = ?";
    db.query(sqlUpdate, [address, name], (err, result) => {
        console.log(result);
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
})