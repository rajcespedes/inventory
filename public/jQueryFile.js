


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

	// var someVar;git

	$('#guardarPedido').click( 


		function (){

			var trying = $('input[name=pedido]:checked').map( function () {
				return $(this).val();
			}).get();

			if ($('input[type=name]:checked').val()) {
				var capture = $('input[type=number]').val();
				console.log('capture');
			}

			var attempt = $('td').children(`input[type=number]`).map( function () {
				return $(this).val();
			}).get();


			$('input[type=name]:checked').on('click', function() {
				console.log('selected');
			});
			

			var take = attempt.filter( e => e > 0);

			var holder = [];

			trying.forEach( function(element) {
				holder.push( $(`#q${element}`).text()); 
			} );

			var totalHolder = [];

			// holder.forEach( e => parseInt(e) * );

			// console.log(trying);

			// if () {}

			$.post('http://localhost:3000/pedido/',{trying, take},function(data,status){});

			// someVar = $('.pick').text();

			// alert('testing');

			// console.log(someVar);

		}

	);





}


window.onload = function () {

	jQueryFile();

}