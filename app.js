const 	express 		= require('express'),
		app 			= express(),
		mongoose 		= require('mongoose'),
		inventoryRoutes = require('./routes/inventory'),
		productRoutes 	= require('./routes/productRoutes'),
		bodyParser		= require('body-parser'),
		methodOverride 	= require('method-override');


var Articulo = require('./models/articulo'),
	Producto = require('./models/producto'),
	Pedido	= require('./models/almacen');


mongoose.connect('mongodb://localhost:27017/inventory',{useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error: '));

db.once('open', () => console.log('Connected to DB'));

app.listen(process.env.PORT || 3000, process.env.IP);

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(inventoryRoutes);

app.use(productRoutes);

app.use(bodyParser.urlencoded({extende: true}));

app.use(methodOverride("_method"));

app.get('/', (req,res) => res.render('home'));


