


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
			
			// $(`#p${$(this).val()}`).change( () => console.log($(`#p${$(this).val()}`).val()));
			
			// console.log(dataHolder);
		}
	});
	
	$('#guardarPedido').click( 

		function (){

			// alert('worked');

			// $('input[type=checkbox]').click( function() {
				// if($('input[type=checkbox]').is(':checked')){
					if($('input[name=pedido]:checked')){
					// alert($(`#p${$('input[name=pedido]:checked').val()}`).val());
					cantidadHolder.push($(`#p${$('input[name=pedido]:checked').val()}`).val());
					console.log(cantidadHolder);
				}
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