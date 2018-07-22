const morgan = require('morgan');
const BodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const ProductRouters = require('./routes/products');

// Settings
app.set('json spaces', 4);

// Middlewares
app.use(morgan('dev'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: false}));

// Routes
app.use('/products', ProductRouters);

// Static file



// Start server
app.listen(port, () =>{
    console.log("Server running on port " + port);
})