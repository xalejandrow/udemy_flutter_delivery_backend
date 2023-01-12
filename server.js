const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
// const res = require('express/lib/response');

/*
* IMPORTAR RUTAS
*/
const usersRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

/*
* LLAMADO DE LAS RUTAS
*/
usersRoutes(app);


server.listen(3000, '192.168.0.108' || 'localhost', function() {
    console.log('Aplicacion de NODEJS ' + port + ' Iniciada...')
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});
app.get('/test', (req, res) => {
    res.send('Esta es la ruta Test');
});

// ERROR Handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

// 200 - Respuesta exitosa
// 404 - URL no existe
// 500 - Error interno del servidor