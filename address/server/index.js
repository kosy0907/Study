const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool ({
    host: '127.0.0.1',
    user: 'root',
    password: 'qwer123',
    database: 'addressdb'
});

app.get('/', (req,res) => {
    const sqlInsert = "INSERT INTO address_table (name, address) VALUES ('syko', '010-aaaa-bbbb');"
    // db.query(sqlInsert, (err, result) => {
    //     console.log(err);
    //     res.send("done!");
    // });
});

app.listen(3001, () => {
    console.log("running on port 3001");
})