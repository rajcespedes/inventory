const express 	= require('express'),
		router	= express.Router(),
		Pedido 	= require('../models/pedido'),
		Articulo = require('../models/articulo');


router.get('/pedido', (req,res) => 

	Pedido.find({}).populate('articulo').exec( (err,found) => !err ? res.render('pedidoIndex',{ pedido: found }) : console.log(err) ) 

);

router.get('/pedido/new',(req,res) => 

	Articulo.find({}).populate('producto').populate('almacen').exec( (err,found) => 

		!err ? res.render('nuevoPedido', { articulo: found}) : console.log(err) )  

);


router.post('/pedido', function(req,res) {

	console.log(req.body.sendToBack);
	res.send('Reached pedido post route');

});
 

module.exports = router;