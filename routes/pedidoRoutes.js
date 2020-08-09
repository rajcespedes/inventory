const express 		= require('express'),
		router		= express.Router(),
		Pedido 		= require('../models/pedido'),
		Articulo 	= require('../models/articulo'),
		Producto 	= require('../models/producto');


router.get('/pedido', (req,res) => 

	Articulo.find({}).populate('almacen').populate('producto').exec( (err,found) => 

		// console.log(found) ) 

		!err ? res.render('pedidoIndex',{ articulo: found }) : console.log(err) ) 

);

router.get('/pedido/new',(req,res) => 

	Articulo.find({}).populate('producto').populate('almacen').exec( (err,found) => 

		!err ? res.render('nuevoPedido', { articulo: found}) : console.log(err) )  

);

var articuloHolder = [];

var actualDate = new Date();

router.post('/pedido', function(req,res) {


	// Articulo.create({
	// 	cantidad: req.body.pedido.
	// }, function(err,added){});

	// req.body.sendToBack.forEach( element => 

	// 	Producto.find({descripcion: element },'_id').exec( function(err,res) { 

	// 		articuloHolder.push(res);

	// 		articuloHolder.forEach( id => id.forEach( innerId => console.log(innerId._id)));

	// 	} )

	// console.log
	//  );

	console.log(req.body.pedido);

	

});
 

module.exports = router;