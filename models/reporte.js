const mongoose = require('mongoose');


var reporteSchema = new mongoose.Schema({
    articulo: String,
    id: String,
    cantidad: Number,
    fecha: Date,
    precio: Number
});


module.exports = mongoose.model('Reporte',reporteSchema);