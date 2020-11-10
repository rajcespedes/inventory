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
	Reporte = require('./models/reporte');


mongoose.connect('mongodb+srv://user1:DcWhm9TvMAMcx7Cp@cluster0.wmsar.mongodb.net/Inventory?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

// 'mongodb://localhost:27017/inventory' || 

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

// Pedido.remove({},(err,worked) => !err ? console.log('removed') : console.log(err) );

app.get('/reporte', function(req,res) {
	Reporte.find({},(err,found) => !err ? res.render('report', {dataSent: found}): console.log(err));
});

app.use(bodyParser.urlencoded({extende: true}));

app.use(methodOverride("_method"));

app.get('/', (req,res) => res.render('home'));