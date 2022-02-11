const express= require('express');
const path = require('path');
const app= express();
const webRoutes = require('./routes/webRoutes.js');

app.use('/',webRoutes);

app.listen(3001,()=>{
    console.log('servidor corriendo en el puerto 3001');
});

app.use(express.static(path.resolve(__dirname,'../public')));


