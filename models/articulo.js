const mongoose = require('mongoose');


var articuloSchema = new mongoose.Schema({
	cantidad: Number,
	fechaEntrada: Date,
	estado: String,
	producto: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Producto'
	},
	pedido: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Pedido'
	},
	almacen: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Almacen'
	}
});


module.exports = mongoose.model('Articulo',articuloSchema);