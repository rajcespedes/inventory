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


// var producto = {
// 				descripcion: [],
// 				precioLista: [],
// 				precioVenta: [],
// 				precioXMayor: []
// 			}

router.get('/articulo/new', function(req,res) {

	Almacen.find({}, function(err,found) {
		if(!err) {
			// almacen = {
			// 		nombre: [],
			// 		ubicacion: [],
			// 		capacidad: []
			// 	}
			// found.forEach( function(data) {
			// 	almacen.nombre.push(data.nombre);
			// 	almacen.ubicacion.push(data.ubicacion);
			// 	almacen.capacidad.push(data.capacidad);
			// }  );
			// console.log(almacen);
			almacen = found;
		} else {
			console.log(err);
		}
	});

	Producto.find({},function(err,found){
		if(!err) {
			// console.log(found);
			// found.forEach( function(data) {
			// 	producto.descripcion.push(data.descripcion);
			// 	producto.precioLista.push(data.precioLista);
			// 	producto.precioVenta.push(data.precioVenta);
			// 	producto.precioXMayor.push(data.precioXMayor);
			// });
			// console.log(producto);
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