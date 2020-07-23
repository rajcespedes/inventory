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

var articuloHolder = [];

router.post('/pedido', function(req,res) {

	// console.log(req.body.sendToBack[0]);

	req.body.sendToBack.forEach( element => 

		Producto.find({descripcion: element }, (err,found) => 

			!err ? articuloHolder.push(found) : console.log(err) )

	 );


	articuloHolder.forEach( element => console.log(element._id));

	// ;

	// Articulo.find({});

	// Producto.find({req.body.sendToBack}).populate('articulo').exec( () );

	// console.log(req.body.sendToBack + req.body.cantidadHolder);
	// res.send('Reached pedido post route');

});
 

module.exports = router;