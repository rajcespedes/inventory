


var dataHolder = [];

var precioHolder = [];

var cantidadHolder; 

var sendToBack = [];

var toCut = [];

var cantidadHolder = [];

var precioHolder = [];

var disponibleHolder = [];

function jQueryFile() {

	console.log($());

	$('input[type=checkbox]').click( function() {
		if($(this).is(':checked')){
			dataHolder.push($(this).val());
			precioHolder.push($(`#q${$(this).val()}`).text());
			cantidadHolder.push(($(`#p${$(this).val()}`).val()));
			// disponibleHolder.push($(`#h${$(this).val()}`).text());
			
			// console.log(disponibleHolder);

			// for (var i = 0; i < disponibleHolder.length; i++){
			// 	if(cantidadHolder[i] < disponibleHolder){
			// 		alert('No puede exceder el disponible');
			// 	}
			// }

		}
	});

	

	// $('input[type=number]').change( function(){
	// 	console.log($('.cantidadDisponible').val());
	// 	// console.log($(this).val());
	// 	// if();
	// });
	
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