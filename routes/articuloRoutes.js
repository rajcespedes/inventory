const 	express 		= require('express'),
		router			= express.Router(),
		mongoose		= require('mongoose'),
		methodOverride	= require('method-override'),
		bodyParser		= require('body-parser'),
		Articulo 		= require('../models/articulo'),
		Almacen 		= require('../models/almacen'),
		Producto 		= require('../models/producto');



router.use(bodyParser.urlencoded({extende: true}));

router.use(methodOverride('_method'));

var almacen = [];

var producto = "";

router.get('/articulo/new', function(req,res) {
	// almacen = 

	Almacen.find({}, function(err,found) {
		if(!err) {
			// console.log(found[0].nombre);
			almacen = found;
		} else {
			console.log(err);
		}
	});

	

	Producto.find({},function(err,found){
		if(!err) {
			console.log(almacen[0].nombre);
			res.render('nuevoArticulo',{almacen: almacen, producto: found});
		} else {
			console.log(err);
		}
	});

} );

router.get('/articulo', (req,res) => Articulo.find({}, (err,found) => 

	!err ? res.render('articuloIndex', {articulo: found}) : console.log(err) ) 

);







module.exports = router;