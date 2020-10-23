const mongoose = require('mongoose');

var pedidoSchema = new mongoose.Schema({
	cantidad: [Number],
	fecha: String,
	total: Number,
	articulo: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Articulo'
	}]
	// ,
	// producto: [{
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Producto'
	// }]
	// cantidad: Number,
	// fecha: String,
	// // total: Number,
	// articulo: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Articulo'
	// }
});


module.exports = mongoose.model('Pedido',pedidoSchema);