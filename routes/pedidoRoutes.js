const express 		= require('express'),
		router		= express.Router(),
		Pedido 		= require('../models/pedido'),
		Articulo 	= require('../models/articulo'),
		Producto 	= require('../models/producto');


router.get('/pedido', (req,res) => 

	Articulo.find({}).populate('almacen').populate('producto').exec( (err,found) => 
	
	!err ? res.render('pedidoIndex',{ articulo: found }) : console.log(err) ) 

);

router.get('/pedido/new',(req,res) => 

	Articulo.find({}).populate('producto').populate('almacen').exec( (err,found) => 

		!err ? res.render('nuevoPedido', { articulo: found}) : console.log(err) )  

);

var precioHolder = [];

var actualDate = new Date();

router.post('/pedido', function(req,res) {

	// console.log(precioHolder);

	// Pedido.create({
	// 	cantidad: req.body.take,
	// 	fecha: actualDate.toLocaleDateString(),
	//  articulo: 


	// }, function(err,crated){});
	
	// req.body.pedido.cantidad.forEach( function(value){
	// 	if (value != "") {
	// 		cantidadHolder.push(value);
			
	// 	}
	// } );

	// console.log("actual value " + cantidadHolder);

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

	// console.log(req.body.toCut);

	req.body.toCut.forEach(i => console.log('element ', i.forEach( t => t)));

	

});
 

module.exports = router;