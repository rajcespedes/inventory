const mongoose = require('mongoose');

var pedidoSchema = new mongoose.Schema({
	cantidad: Number,
	fecha: Date,
	articulo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Articulo'
	}
});


module.exports = mongoose.model('Pedido',pedidoSchema);