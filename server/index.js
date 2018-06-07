const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const passwordHash = require('password-hash');
const CryptoJS = require("crypto-js");
const config = require('./apps/config');
const app = express();

const SELECT_ALL_USERS_QUERY = `SELECT * FROM users`;

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.dbname
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('Node.JS API for e-learning testing(React+Node+MySql).....');
});

app.get('/user/add', (req, res) => {
    const { name, email, password, address } = req.query;
    // Encrypt
    var hashedPassword = CryptoJS.AES.encrypt(password, config.secretKey);

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(hashedPassword.toString(), config.secretKey);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);

    const INSERT_USER_QUERY = `INSERT INTO users (name,email,password,address) VALUES ('${name}','${email}','${hashedPassword}','${address}')`;
    connection.query(INSERT_USER_QUERY, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            return res.send('successfully added user');
        }
    });
});

app.get('/user', (req, res) => {
    const { email, password } = req.query;
    // Encrypt
    var hashedPassword = CryptoJS.AES.encrypt(password, config.secretKey);
    const SELECT_USER_BY_ID = `SELECT name,email,address FROM users WHERE email = '${email}' AND password = '${password}'`;

    connection.query(SELECT_USER_BY_ID, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            })
        }
    });
});

app.listen(4000, () => {
    console.log('Server listening on port 4000')
});