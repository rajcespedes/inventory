


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
			// $(`#p${$(this).val()}`).change( () => console.log($(`#p${$(this).val()}`).val()));
			
			// console.log(dataHolder, precioHolder, cantidadHolder);
		}
	});
	
	$('#guardarPedido').click( 

		function (){
			
			toCut = $('form').serializeArray();

			$.post('http://localhost:3000/pedido/',{dataHolder, toCut},function(data,status){});		

		}

	);


}


window.onload = function () {

	jQueryFile();

}