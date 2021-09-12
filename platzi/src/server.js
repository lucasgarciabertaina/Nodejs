const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
const router = require('./network/routes');
router(app);
app.use(router);
app.use('/app', express.static('public'));


app.listen(5000);
console.log('La aplicación esta escuchando en http://localhost:5000')