const 	express 	= require('express'),
		router		= express.Router(),
		mongoose	= require('mongoose');


router.get('/almacen',(req,res) => res.render('almacenIndex'));


module.exports = router;