


var dataHolder;

var total = 0;

var grow = 0; 

var sendToBack = [];

var toCut = [];

var cantidadHolder = [];

var precioHolder = [];

function jQueryFile() {

	// alert('working');	

	// $('#toCapture').change( function() {
	
	// 	$('#precioVenta').val($('#toCapture').val());

	// });

	// $('i').click(function() {

	// 	$('#toAdd').append(

	// 		"<tr>" +
	// 		`<td id="x${grow++}">${$('#toCapture option:selected').text()}</td>` +
	// 		`<td>${$('#precioVenta').val()}</td>` +
	// 		`<td>${$('#cantidad').val()}</td>` +
	// 		"</tr>"
			
	// 	);

	// 	total += $('#precioVenta').val() * $('#cantidad').val();

	// 	$('#totalSum').text(total);

	// 	toCut = $(`#toCapture option:selected`).text();

	// 	sendToBack.push(toCut.slice(1));

	// 	cantidadHolder.push($('#cantidad').val());

	// 	precioHolder.push($('#precioVenta').val());


	// 	// console.log(sendToBack);
	// 	// console.log(cantidadHolder);
	// 	console.log($('#totalSum').text());

	// });

	// var someVar;

	$('#guardarPedido').click( 


		function (){

			console.log($('input[type="checkbox"]:checked').val());

			// console.log('runs');

			// $.post('http://localhost:3000/pedido/',{sendToBack, cantidadHolder},function(data,status){});

			// someVar = $('.pick').text();

			alert('testing');

			// console.log(someVar);

		}

	);





}


window.onload = function () {

	jQueryFile();

}