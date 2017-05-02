const config = require('./config');
const express = require('express');
const enforce = require('express-sslify');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS());
}

app.use(express.static('public'));

app.listen(config.port, () => {
  console.log('App listening on port ' + config.port);
});