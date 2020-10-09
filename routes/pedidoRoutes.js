const articulo = require('../models/articulo');

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

var cantidad = [];

var element = [];

var actualDate = new Date();

var accum = 0;

router.post('/pedido', function(req,res) {

	req.body.toCut.forEach( function (item){
		if(item.value.length > 10){
			element.push(item.value);
		} else if(item.value.length != 0) {
			cantidad.push(item.value);
		}
		
	}
	
	);

	// element.forEach( data => Articulo.findById(data, (result,err) => result ? console.log(result) : console.log(err) ));

	// console.log(cantidad);
	// console.log('price ', req.body.precioHolder);

	for (let i = 0; i < cantidad.length; i++){
		// console.log(cantidad[i]);
		accum += cantidad[i] * req.body.precioHolder[i];
		// console.log(req.body.precioHolder[i]);
		// console.log(accum);
	}

	Pedido.create({
		cantidad: cantidad,
		fecha: actualDate.toLocaleDateString(),
		total: accum,
		articulo: element
	}, 
	(saved,err) => saved ? console.log(saved) : console.log(err)
	);

	cantidad = [];
	accum = [];
	element = [];

}); 

module.exports = router;