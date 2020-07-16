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

router.get('/articulo/new', function(req,res) {

	Almacen.find({}, function(err,found) {
		if(!err) {
			almacen = found;
		} else {
			console.log(err);
		}
	});

	Producto.find({},function(err,found){
		if(!err) {
			res.render('nuevoArticulo',{almacen: almacen, producto: found});
		} else {
			console.log(err);
		}
	});

} );

router.get('/articulo', (req,res) => Articulo.find({}).populate('producto').exec( (err,found) =>



	!err ? res.render('articuloIndex', {articulo: found}) : console.log(err) )

);

var actualDate = new Date();

router.post('/articulo', (req,res) => Articulo.create(
	{
		cantidad: req.body.articulo['cantidad'],
		fechaEntrada: actualDate.toLocaleDateString(),
		estado: "Disponible",
		producto: req.body.articulo['descripcion'],
		almacen: req.body.articulo['almacen']
	}, (err,added) => !err ? res.redirect('/articulo') : console.log(err)  )
);


module.exports = router;