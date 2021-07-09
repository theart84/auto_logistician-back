const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const requisitionRoute = require('./routes/requisition.route');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', requisitionRoute);
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'All right!'
    })
})

module.exports = app;