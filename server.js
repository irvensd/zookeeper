const express = require("express");
const { animals } = require("./data/animals");
const fs = require("fs");
const path = require("path");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3010;

// Instantiate Server
const app = express();

app.use(express.static('public'))


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port 3010`);
});
