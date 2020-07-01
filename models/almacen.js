const mongoose = require('mongoose');

var almacenSchema = new mongoose.Schema({
	nombre: String,
	ubicaciion: String,
	capacidad: Number,
	articulo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Articulo'
	}
});


module.exports = mongoose.model('Almacen',almacenSchema);
