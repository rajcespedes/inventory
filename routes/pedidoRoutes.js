// const { update } = require('../models/articulo');

const express 		= require('express'),
		router		= express.Router(),
		Pedido 		= require('../models/pedido'),
		Articulo 	= require('../models/articulo'),
		Reporte 	= require('../models/reporte');


router.get('/pedido', function(req,res) {

	Articulo.find({}).populate('almacen').populate('producto').exec( function(err,found) {
		if(!err){
			// console.log(found);
			res.render('pedidoIndex',{ articulo: found });
		} else {
			console.log(err)
		}
	}	

)});

router.get('/pedido/new',(req,res) => 

	Articulo.find({}).populate('producto').populate('almacen').exec( (err,found) => 

		!err ? res.render('nuevoPedido', { articulo: found}) : console.log(err) )  

);

var toSend = {
	cantidad: [],
	articulo: [],
	total: 0
};

var item = {
	// pedido: []
};

var available;

var actualDate = new Date();

var accum = 0;


router.post('/pedido', function(req,res) {

	// console.log('incoming info ', req.body.item);

	for (var x = 0; x < req.body.item.cantidad.length; x++) {
		if(req.body.item.cantidad[x] == ''){
			console.log('empty');
		// 	item.pedido.push(req.body.item.pedido);
		} else {
			if(req.body.item.pedido.length == 24){
				// console.log('first block', req.body.item.pedido.length);
				toSend.articulo = req.body.item.pedido;
				toSend.descripcion = req.body.item.descripcion[req.body.item.cantidad.indexOf(req.body.item.cantidad[x])];
				toSend.cantidad = req.body.item.cantidad[req.body.item.cantidad.indexOf(req.body.item.cantidad[x])];
				toSend.fecha = actualDate.toLocaleDateString();
				// console.log('index Of ',req.body.item.cantidad.indexOf(req.body.item.cantidad[x]));
				// toSend.cantidad = req.body.item.cantidad[x];
				// toSend.cantidad = req.body.item.
				//item.pedido.push(req.body.item.pedido);
				console.log(req.body.item.disponible[x]);
				available = req.body.item.disponible[x];
				accum += toSend.cantidad * req.body.item.precio[x];
				// console.log(toSend.cantidad);
				
			} else {
				// for (var x = 0; x < req.body.item.cantidad.length; x++) {
					// item.pedido.push(req.body.item.pedido[x]);
					// toSend.pedido = req.body.item.pedido[x];
					toSend.cantidad.push(req.body.item.cantidad[x]);
					toSend.articulo.push(req.body.item.pedido[x]);
					// toSend.precio = req.body.item.precio[x];
					toSend.fecha = actualDate.toLocaleDateString();
					// console.log(req.body.item);
					// toSend.descripcion = req.body.item.descripcion[x];
					accum += toSend.cantidad[x] * req.body.item.precio[x];
					available = req.body.item.disponible[x];


				}
				// console.log('second block', req.body.item.pedido.length);
				// console.log(req.body.item.pedido[x]);
				toSend.total = accum;	
				// item.pedido.push(req.body.item.pedido);
			}
			// for(var x = 0; x < toSend.cantidad.length; x++){
			// 	accum += toSend.cantidad[x] * req.body.item.precio[x];
			// }

			
			// console.log(req.body.item.cantidad[x]);
			
			// console.log(req.body.item.precio[x]);
			
			// console.log(req.body.item.descripcion[x]);
			
		// }
		// Pedido.create(toSend,function(err,created){
		// 	if(!err){
		// 		console.log('created');
				
		// 	} else {
		// 		console.log(err);
		// 	}
			
		// });
		// res.redirect('/pedido');
	// }
	// console.log(toSend);
	// console.log('to the report ', item);
	// console.log('to the model ',toSend);





	// item.pedido = [];
	// console.log(item);
	// toSend.cantidad = [];

// }
// 	var cantidadLeft;

// 	req.body.toCut.forEach( function (item){
// 		if(item.value.length > 10){
// 			element.push(item.value);
// 		} else if(item.value.length != 0) {
// 			cantidad.push(item.value);
// 		}
	// toSend.total = 0;	

			

	}

	// console.log('outside loop ' , toSend);

	Pedido.create(toSend,function(err,dataSent) {
		if(!err){
			console.log('incoming ', req.body.item);
			for (var x = 0; x < dataSent.cantidad.length; x++) {
				item.articulo = dataSent.articulo[x];
				item.id = dataSent._id;
				item.cantidad = dataSent.cantidad[x];
				item.fecha = dataSent.fecha;
				// available = req.body.item.disponible[x];
				item.precio = parseInt(req.body.item.precio[x]);
				
				// console.log('before sending to report ',item);

				// console.log('toUpdate ', req.body.item.disponible[x] - item.cantidagit pushd);


				// console.log('this comes within ',	available, 'this comes after ',  item.cantidad, 'the result is ', (available - item.cantidad));


				Articulo.findByIdAndUpdate(item.articulo,{ cantidad: ( available - item.cantidad ) }, function(err,toUpdate){
					if (!err) {
						console.log('first value ', available);
						console.log('second value ', item.cantidad);
						console.log('this was sent ', toUpdate);
						if((available - item.cantidad) == 0){
							Articulo.findByIdAndRemove(toUpdate._id, function(err){
								if(!err) {
									console.log('deleted');
								}
							});
						}
						// available = 0;
						// item.cantidad = 0;
					} else {
						console.log(err);
					}
				});

				Reporte.create(item, function(err,toReport){
					if(!err){
						// console.log(toReport);
						
						// res.redirect('/pedido');
					} else {
						console.log(err);
					}
				});
				// item.cantidad = 0;
			}
			res.redirect('/pedido');
			
		} else {
			console.log(err);
		}
	});

	

	accum = 0;
	// item.pedido = [];
	toSend = {
		cantidad: [],
		articulo: [],
		total: 0
	};
	
	item = {
		// pedido: []
	};
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