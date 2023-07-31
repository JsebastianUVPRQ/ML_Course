// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan'); // log request details
const { sequelize } = require('./models');
const config = require('./config/config');

// Create express application
const app = express();

// Use middleware
app.use(morgan('combined')); // log request details
app.use(bodyParser.json()); // parse request body
app.use(cors()); // allow CORS

// Import routes
require('./routes')(app);

// Start server
sequelize.sync()
  .then(() => {
    app.listen(config.port);
    console.log(`Server started on port ${config.port}`);
  });