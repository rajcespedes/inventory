


var dataHolder = [];

var precioHolder = [];

var cantidadHolder; 

var sendToBack = [];

var toCut = [];

var descripcionHolder = [];

var precioHolder = [];

var disponibleHolder = [];

function jQueryFile() {

	console.log($());

	$('input[type=checkbox]').click( function() {
		if($(this).is(':checked')){
			dataHolder.push($(this).val());
			precioHolder.push($(`#q${$(this).val()}`).text());
			descripcionHolder.push(($(`#z${$(this).val()}`).text()));
			disponibleHolder.push($(`#q${$(this).val()}`).text());

		}
	});
	
	$('#guardarPedido').click( 

		function (){
			
			toCut = $('form').serializeArray();

			$.post('http://localhost:3000/pedido/',{dataHolder, toCut, precioHolder, descripcionHolder, disponibleHolder},function(data,status){});		

		}

	);


}


window.onload = function () {

	jQueryFile();

}