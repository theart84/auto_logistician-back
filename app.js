const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'All right!'
    })
})



module.exports = app;