const express 			= require('express'),
		router			= express.Router(),
		mongoose		= require('mongoose'),
		Producto 		= require('../models/producto'),
		bodyParser		= require('body-parser'),
		methodOverride 	= require('method-override');


router.use(methodOverride('_method'));

router.use(bodyParser.urlencoded({extended: true}));

router.get('/producto', (req,res) => Producto.find({},(err,found) => !err ? res.render('productoIndex',{producto: found}) : console.log(err) ) );

router.get('/producto/new', (req,res) => res.render('nuevoProducto'));

router.get('/producto/:id/edit', (req,res) => Producto.findById(req.params.id, (err,found) => !err ? res.render('editarProducto',{producto: found}) : console.log(err) ) );

router.put('/producto/:id', (req,res) => Producto.findByIdAndUpdate(req.params.id,req.body.producto, (err,edited) => !err ? res.redirect('/producto') : console.log(err)) );

router.delete('/producto/:id', (req,res) => Producto.findByIdAndRemove(req.params.id, (err,deleted) => !err ? res.redirect('/producto') : console.log(err) ) );

router.post('/producto', (req,res) => Producto.create(req.body.producto, (err,created) => !err ? res.redirect('/producto') : console.log(err)) );



module.exports = router;





 