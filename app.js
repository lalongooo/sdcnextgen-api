const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Version = require('./models/version');
const port = process.env.PORT || 3000;

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//Set up default mongoose connection
var mongoDB = 'mongodb://sdcadmin:Secret123@ds127954.mlab.com:27954/sdcnextgen-api';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/version', function(req, res) {
  Version.findOne({}, "-_id latest", function (err, version) {
    if (err) {
      res.status(500).end();
    } else {
      res.json(version);
    }
  });
});

app.listen(port, () => console.log(`API app listening on port ${port}!`))