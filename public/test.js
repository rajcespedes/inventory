


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
			disponibleHolder.push($(`#h${$(this).val()}`).text());

		}
	});
	
	$('#guardarPedido').click( 

		function (){
			
			toCut = $('form').serializeArray();

			$.post('http://localhost:3000/pedido/',{dataHolder, toCut, precioHolder, descripcionHolder, disponibleHolder},function(data,status){ 
				$(location).attr('href', '/pedido');					
				// setTimeout($(location).attr('href', '/pedido'),3000);		
			});	
			
			
			

			// location.href = 'pedidoIndex.ejs';



			// window.location.href = window.location.href;
			

		}

	);


}


window.onload = function () {

	jQueryFile();

}