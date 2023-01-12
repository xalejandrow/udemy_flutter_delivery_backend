const usersController = require('../controllers/usersController');

module.exports = (app) => {

    // GET -> Obtener datos
    // POST -> Almacenar datos
    // PUT -> Actualizar datos
    // DELETE -> Eliminar datos

    app.post('/api/users/create', usersController.register);

};