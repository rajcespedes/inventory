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

var item = {};

var available = [];

var actualDate = new Date();

var accum = 0;


router.post('/pedido', function(req,res) {

	for (var x = 0; x < req.body.item.cantidad.length; x++) {
		if(req.body.item.cantidad[x] == ''){
			console.log('empty');
		
		} else {
			if(req.body.item.pedido.length == 24){
		
				toSend.articulo = req.body.item.pedido;
				toSend.descripcion = req.body.item.descripcion[req.body.item.cantidad.indexOf(req.body.item.cantidad[x])];
				toSend.cantidad = req.body.item.cantidad[req.body.item.cantidad.indexOf(req.body.item.cantidad[x])];
				toSend.fecha = actualDate.toLocaleDateString();

					for(var y = 0; y < req.body.item.cantidad.length; y++) {
						if(req.body.item.cantidad[y] != '') {
							console.log('para uno');
							available.push(req.body.item.disponible[y]);		
							console.log('lap ', available);	
						}
					}
				
				accum += toSend.cantidad * req.body.item.precio[x];
				
			} else {
					toSend.cantidad.push(req.body.item.cantidad[x]);
					toSend.articulo.push(req.body.item.pedido[x]);

					toSend.fecha = actualDate.toLocaleDateString();

					accum += toSend.cantidad[x] * req.body.item.precio[x];
					
					if(req.body.item.cantidad[x] != '') {
						available.push(req.body.item.disponible[x]);		
						console.log('disponible ', available);	
					}
				}
			
				toSend.total = accum;	

			}

	}

	Pedido.create(toSend,function(err,dataSent) {
		if(!err){
			for (var x = 0; x < dataSent.cantidad.length; x++) {
				item.articulo = dataSent.articulo[x];
				item.id = dataSent._id;
				item.cantidad = dataSent.cantidad[x];
				item.fecha = dataSent.fecha;

				item.precio = parseInt(req.body.item.precio[x]);

				if(available.length > 1) {
					for(var z = 0; z < available.length; z++){
						updateArticulo(available[z], dataSent.cantidad[z], dataSent.articulo[z]);
					} 
				} else if (available.length == 0) {

				} else {
					updateArticulo(available, item.cantidad, dataSent.articulo);
				}

				available = [];

				Reporte.create(item, function(err,toReport){
					if(!err){					

					} else {
						console.log(err);
					}
				});
	
			}
			res.redirect('/pedido');
			
		} else {
			console.log(err);
		}
	});

	accum = 0;

	toSend = {
		cantidad: [],
		articulo: [],
		total: 0
	};
	
	item = {};

});


function updateArticulo(available, cantidad, articulo){
	// console.log('at the end this is sent ', available, '& ' , cantidad);
	Articulo.findByIdAndUpdate(articulo,{ cantidad: ( available - cantidad ) }, function(err,toUpdate){
			if (!err) {

				if((available - item.cantidad) == 0){
					Articulo.findByIdAndRemove(toUpdate._id, function(err){
						if(!err) {
							console.log('deleted');
						}
					});
				}
			} else {
				console.log(err);
			}
		});
}

// 


module.exports = router;