const express = require('express');
const bodyParser = require('body-parser');

const router = require('./Router/router');
const hostname = 'localhost';
const port = '8900';

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization');
    next();
})

app.use('/', router);
app.listen(port, hostname, () =>{
    console.log(`Server is running on http://${hostname}:${port}`);
});
