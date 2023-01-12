const User = require('../models/user');

module.exports = {

    register(req, res) {
        console.log('req: ',req.body);
        const user = req.body; // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE
        console.log('User: ', user);
        User.create(user, (err, data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'El registro se realizo correctamente',
                data: data // EL ID DEL NUEVO USUARIO QUE SE REGISTRO
            });

        });

    }

}