const 	express 		= require('express'),
		app 			= express(),
		mongoose 		= require('mongoose'),
		inventoryRoutes = require('./routes/inventory'),
		productRoutes 	= require('./routes/productRoutes'),
		articuloRoutes	= require('./routes/articuloRoutes'),
		bodyParser		= require('body-parser'),
		methodOverride 	= require('method-override'),
		pedidoRoutes	= require('./routes/pedidoRoutes');

var Articulo = require('./models/articulo'),
	Producto = require('./models/producto'),
	Almacen	= require('./models/almacen'),
	Pedido = require('./models/pedido');


mongoose.connect('mongodb://localhost:27017/inventory',{useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error: '));

db.once('open', () => console.log('Connected to DB'));

app.listen(process.env.PORT || 3000, process.env.IP);

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(inventoryRoutes);

app.use(productRoutes);

app.use(articuloRoutes);

app.use(pedidoRoutes);

// Pedido.remove({},(err,res) => console.log('removed'));

var convert = []; 

app.get('/report', function(req,res) {

	Pedido.find({}, function (err,data)  {
		
		if(data) {
			// data.forEach( info => convert.push(
			// 	{
			// 		cantidad: info['cantidad']
			// 	}

			// ) );

			console.log('this is the data received ', data);
			res.render('report', {dataSent: data});
		} else {
			console.log(err);
		} 
	
})
});

app.use(bodyParser.urlencoded({extende: true}));

app.use(methodOverride("_method"));

app.get('/', (req,res) => res.render('home'));