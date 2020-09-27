


var dataHolder = [];

var total = 0;

var grow = 0; 

var sendToBack = [];

var toCut = [];

var cantidadHolder = [];

var precioHolder = [];

function jQueryFile() {

	$('input[type=checkbox]').click( function() {
		if($(this).is(':checked')){
			dataHolder.push($(this).val());
			console.log(dataHolder);
		}
	});
	
	$('#guardarPedido').click( 

		function (){

			// $('input[type=checkbox]').click( function() {
			// 	if($(this).is(':checked')){
			// 		console.log($(this).attr('value'));
			// 	}
			// });
		

			// var trying = $('input[name=pedido]:checked').map( function () {
			// 	return $(this).val();
			// }).get();
			
			// if($('input[type=checkbox]'))
 
			// var attempt = $('td').children(`input[type=number]`).map( function () {
			// 	return $(this).val();
			// }).get();		

			// var take = attempt.filter( e => e > 0);

			// var holder = [];

			// trying.forEach( function(element) {
			// 	holder.push( $(`#q${element}`).text()); 
			// } );

			// var totalHolder = [];

			$.post('http://localhost:3000/pedido/',{dataHolder},function(data,status){});		

		}

	);


}


window.onload = function () {

	jQueryFile();

}