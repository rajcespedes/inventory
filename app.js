const 	express 	= require('express'),
		app 		= express(),
		mongoose 	= require('mongoose');


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

app.get('/', (req,res) => res.render('home'));


