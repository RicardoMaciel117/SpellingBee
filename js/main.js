$(document).ready(function(){
$('[data-toggle="popover"]').popover({ html : true });

});

var intentos = 0;


function ocultarJumbo(){
	document.getElementById('jumbo').style.display = "none";
	document.getElementById('selector').style.display = "block";
}

function ocultarSelector(){
	document.getElementById('selector').style.display = "none";
	document.getElementById('speaker').style.display = "block";
}

function ocultarSpeaker(){
	document.getElementById('speaker').style.display = "none";
	document.getElementById('botones').style.display = "block";
}

function getData(){
	intentos++;
	document.getElementById('lets').style.opacity = 1.0;
	$('.pop').attr('data-content','No: '+intentos);
	var elemento = document.getElementById("speakerImg");
  	elemento.blur();
}


$('.pop').popover().click(function () {
    setTimeout(function () {
        $('.pop').popover('hide');
    }, 700);
});