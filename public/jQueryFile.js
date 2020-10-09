


var dataHolder = [];

var precioHolder = [];

var cantidadHolder; 

var sendToBack = [];

var toCut = [];

var cantidadHolder = [];

var precioHolder = [];

function jQueryFile() {

	$('input[type=checkbox]').click( function() {
		if($(this).is(':checked')){
			dataHolder.push($(this).val());
			precioHolder.push($(`#q${$(this).val()}`).text());
			cantidadHolder.push(($(`#p${$(this).val()}`).val()));
			
			
		}
	});

	$('input[type=number]').change( function(){
		console.log($('.cantidadDisponible').text());
		console.log($(this).val());
		// if();
	});
	
	$('#guardarPedido').click( 

		function (){
			
			toCut = $('form').serializeArray();

			$.post('http://localhost:3000/pedido/',{dataHolder, toCut, precioHolder},function(data,status){});		

		}

	);


}


window.onload = function () {

	jQueryFile();

}