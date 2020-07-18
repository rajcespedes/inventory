const express 	= require('express'),
		router	= express.Router(),
		Pedido 	= require('../models/pedido');


router.get('/pedido', (req,res) => 

	Pedido.find({}).populate('articulo').exec( (err,found) => !err ? res.render('pedidoIndex',{ pedido: found }) : console.log(err) ) 

);


module.exports = router;