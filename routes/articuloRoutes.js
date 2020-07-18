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

router.get('/articulo', (req,res) => Articulo.find({}).populate('producto').populate('almacen').exec( (err,found) =>

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
	}, (err,added) => !err ? res.redirect('/articulo') : console.log(err) )
);

var almacenHolder, productoHolder;


router.get('/articulo/:id/edit', function(req,res) {

	Almacen.find({},function(err,foundAlmacen) {

		if(!err) {
			almacenHolder = foundAlmacen;
		} else {
			console.log(err);
		}

	});

	Producto.find({},function(err,foundProducto) {

		if(!err) {
			productoHolder = foundProducto;
		} else {
			console.log(err);
		}

	});


	Articulo.findById(req.params.id).populate('almacen').populate('producto').exec( (err,found) => 

		!err ? res.render('editarArticulo', {articulo: found, almacen: almacenHolder, producto: productoHolder}) : console.log(err)) 	

} 

);

router.put('/articulo/:id', (req,res) => 

		Articulo.findByIdAndUpdate(req.params.id,req.body.articulo, (err,edited) => !err ? res.redirect('/articulo') : console.log(err))

 );

router.delete('/articulo/:id', (req,res) => Articulo.findByIdAndRemove(req.params.id, (err,del) => !err ? res.redirect('/articulo') : console.log(err) ) );


module.exports = router;