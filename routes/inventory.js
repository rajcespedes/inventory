const 	express 	= require('express'),
		router		= express.Router({mergeParams: true}),
		mongoose	= require('mongoose'),
		Almacen 	= require('../models/almacen'),
		bodyParser	= require('body-parser'),
		methodOverride	= require('method-override');

router.use(methodOverride('_method'));

router.use(bodyParser.urlencoded({extended: true}));

router.get('/almacen',(req,res) => Almacen.find({}, (err,found) => !err ? res.render('almacenIndex',{almacen: found}) : console.log(err)));

router.get('/almacen/new', (req,res) => res.render('nuevoAlmacen'));

router.post('/almacen', (req,res) => Almacen.create(req.body.almacen, (err,created) => !err ? res.redirect('/almacen') : console.log(err)) );

router.get('/almacen/:id/edit', (req,res) => Almacen.findById(req.params.id, (err,found) => !err ? res.render('editarAlmacen',{ almacen: found } ) : console.log(err)) );

router.put('/almacen/:id', (req,res) => Almacen.findByIdAndUpdate(req.params.id,req.body.almacen,(err,edited) => !err ? res.redirect('/almacen') : console.log(err) ) );

router.delete('/almacen/:id', (req,res) => Almacen.findByIdAndRemove(req.params.id, (err,deleted) => !err ? res.redirect('/almacen') : console.log(err)));

// Almacen.remove({},(err,done) => console.log('removed') );

module.exports = router;