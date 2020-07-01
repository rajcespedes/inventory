const mongoose	= require('mongoose');


var productoSchema = new mongoose.Schema({
	descripcion: String,
	precioLista: Number,
	precioVenta: Number,
	precioXMayor: Number,
	articulo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Articulo'
	}
});


module.exports = mongoose.model('Producto',productoSchema);