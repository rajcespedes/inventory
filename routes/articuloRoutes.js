const 	express 		= require('express'),
		router			= express.Router(),
		mongoose		= require('mongoose'),
		methodOverride	= require('method-override'),
		bodyParser		= require('body-parser'),
		Articulo 		= require('../models/articulo');



router.use(bodyParser.urlencoded({extende: true}));

router.use(methodOverride('_method'));

var almacen = "";

router.get('/articulo/new', function(req,res) {

}

);

router.get('/articulo', (req,res) => Articulo.find({}, (err,found) => 

	!err ? res.render('articuloIndex', {articulo: found}) : console.log(err) ) 

);







module.exports = router;