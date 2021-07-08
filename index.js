const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 5000;

async function start() {
    try {
      await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }, () => {
        console.log('Connected to DB');
      });
      app.listen(port, () => {
        console.log(`Server has been started on ${port} port.`);
      });
    } catch (err) {
      console.log(err);
    }
  }
  
  start();