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

router.post('/pedido', function(req,res) {

	// console.log(req.body);

	req.body.toCut.forEach( function (item){
		if(item.value.length > 10){
			// console.log('captured an id ', item.value);
			element.push(item.value);
		} else if(item.value.length != 0) {
			// console.log('captured a number ', item.value);
			cantidad.push(item.value);
		}
		
	}

	
		
		// item => console.log('element ',item.value)
	
	);

	console.log(element);

});

// router.get('/pedidos/cantidad', function(req,res){
// 	res.render('cantidad');
// });
 

module.exports = router;