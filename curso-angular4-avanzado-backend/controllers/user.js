'use strict';

// modulos
var bcrypt = require('bcrypt-nodejs');

// modelos
var User = require('../models/user');

// acciones
function pruebas(req, res) {
	res.status(200).send({
		message: 'Probando el controlador de usuarios y la accion pruebas'
	});
}

function saveUser(req, res) {
	var user = new User();

	// recoger parametros de la peticion
	var params = req.body;
	console.log(params);

	if(params.password && params.name && params.surname && params.email) {
		// asignar valores al usuario
		user.name = params.name;
		user.surname = params.surname;
		user.email = params.email;
		user.role = 'ROLE_USER';
		user.image = null;

		
		bcrypt.hash(params.password, null, null, function(err, hash) {
			user.password = hash;
			// guardar user en bd
			user.save((err, userStored) => { 
				if(err) {
					res.status(500).send({ message: 'Error al guardar el usuario' });
				} else {
					if(!userStored) {
						res.status(404).send({ message: 'No se ha registrado el usuario' });
					} else {
						res.status(200).send({ user: userStored });
					}
				}
			});
		});
	} else {
		res.status(200).send({
			message: 'Introduce los datos correctamente para poder registrar el usuario'
		});
	}
}

module.exports = {
	// exportamos los metodos
	pruebas,
	saveUser
};