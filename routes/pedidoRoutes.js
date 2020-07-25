const express 		= require('express'),
		router		= express.Router(),
		Pedido 		= require('../models/pedido'),
		Articulo 	= require('../models/articulo'),
		Producto 	= require('../models/producto');


router.get('/pedido', (req,res) => 

	Pedido.find({}).populate('articulo').exec( (err,found) => 

		!err ? res.render('pedidoIndex',{ pedido: found }) : console.log(err) ) 

);

router.get('/pedido/new',(req,res) => 

	Articulo.find({}).populate('producto').populate('almacen').exec( (err,found) => 

		!err ? res.render('nuevoPedido', { articulo: found}) : console.log(err) )  

);

var articuloHolder;

var actualDate = new Date();

router.post('/pedido', function(req,res) {

	req.body.sendToBack.forEach( element => 

		Producto.find({descripcion: element },'_id').exec( function(err,res) { 

			articuloHolder.push(res);

		} )


	 );


	console.log(articuloHolder);

	// Pedido.create({
	// 	fecha: actualDate.toLocaleDateString(),
	// 	cantidad: req.body.cantidadHolder,
	// 	articulo: articuloHolder.forEach( id => id),

	// });


});
 

module.exports = router;