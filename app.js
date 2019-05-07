const express = require('express');
const routes = require('./routes');

const app = express();

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', routes);
app.use(express.static('public'));

const startServer = (port = 7755) => {
    const server = app.listen(port, function () {
      console.log(`Server running on port ${server.address().port}`);
    });
};

module.exports = startServer;