const { update } = require('../models/articulo');

const express 		= require('express'),
		router		= express.Router(),
		Pedido 		= require('../models/pedido'),
		Articulo 	= require('../models/articulo'),
		Reporte 	= require('../models/reporte');


router.get('/pedido', (req,res) => 

	Articulo.find({}).populate('almacen').populate('producto').exec( (err,found) => 
	
	!err ? res.render('pedidoIndex',{ articulo: found }) : console.log(err) ) 

);

router.get('/pedido/new',(req,res) => 

	Articulo.find({}).populate('producto').populate('almacen').exec( (err,found) => 

		!err ? res.render('nuevoPedido', { articulo: found}) : console.log(err) )  

);

var toSend = {};

var item = [];

var element = [];

var actualDate = new Date();

// var accum = 0;


router.post('/pedido', function(req,res) {


	console.log(req.body.item);

	for (var x = 0; x < req.body.item.cantidad.length; x++) {
		if(req.body.item.cantidad[x] == ''){
			console.log('empty value');
		} else {
			if(req.body.item.pedido.length == 24){
				// console.log(req.body.item.pedido);
				toSend.pedido = req.body.item.pedido;
				
			} else {
				// console.log(req.body.item.pedido[x]);
				toSend.pedido = req.body.item.pedido[x];
			}
			// console.log(req.body.item.cantidad[x]);
			toSend.cantidad = req.body.item.cantidad[x];
			// console.log(req.body.item.precio[x]);
			toSend.precio = req.body.item.precio[x];
			// console.log(req.body.item.descripcion[x]);
			toSend.descripcion = req.body.item.descripcion[x];
		}
		Pedido.create(toSend,function(err,created){
			if(!err){
				console.log('created');
				
			} else {
				console.log(err);
			}
			
		});
		// res.redirect('/pedido');
	}
	// console.log(toSend);

// 	var cantidadLeft;

// 	req.body.toCut.forEach( function (item){
// 		if(item.value.length > 10){
// 			element.push(item.value);
// 		} else if(item.value.length != 0) {
// 			cantidad.push(item.value);
// 		}
		
// 	}
	
// 	);

// 	for (let i = 0; i < cantidad.length; i++){
	
// 		accum += cantidad[i] * req.body.precioHolder[i];
	
// 	}

// 	Pedido.create({
// 		cantidad: cantidad,
// 		fecha: actualDate.toLocaleDateString(),
// 		articulo: element
// 	}, 
// 	function(err,saved) {
// 		if(saved){
// 			for (var x = 0; x < saved.cantidad.length; x++) {
// 				Reporte.create({
// 					articulo: req.body.descripcionHolder[x],
// 					id: saved._id,
// 					cantidad: cantidad[x],
// 					fecha: saved.fecha,
// 					precio: req.body.precioHolder[x]
// 				}
// 				// , function(err,passed){
// 				// 	if(passed) {
// 				// 		// console.log('this passed ', passed);
// 				// 	} else {
// 				// 		console.log(err);
// 				// 	}
// 				// }
// 				);
				
// 				cantidadLeft = (req.body.disponibleHolder[x] - cantidad[x]);

// 				Articulo.findByIdAndUpdate(element[x],{ cantidad: (req.body.disponibleHolder[x] - cantidad[x]) }, function(err,updated) {
// 					if(!err){
						
// 						console.log('update');	
// 						// res.redirect('/');
							
// 					} 
// 					else {
// 						console.log(err);
// 						// res.redirect('/');
// 						}
// 						// res.redirect('/');
// 				});

// 				if(cantidadLeft == 0) {
// 					Articulo.findByIdAndRemove(element[x], (err,deleted) => deleted ? console.log('deleted') : console.log(err));
// 				}
				
				
						

// 			} 
			
// 		} 
// 		else {
// 			console.log(err);
// 		}

		
// 	cantidad = [];
// 	accum = [];
// 	element = [];

// 	// refresh(res);
// 	// res.send({redirect: '/pedido'});
// 	res.redirect(200,'/pedido');
// });

	

});

// function refresh(run){
// 	run.redirect('/pedido');
// 	console.log('got here');
// }

module.exports = router;