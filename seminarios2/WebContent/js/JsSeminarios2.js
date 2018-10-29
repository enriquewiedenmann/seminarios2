/**
 * 
 */


function camposSingUp() {
	document.getElementById("datosSingUp").style.display = "block";
	document.getElementById("btnSingUP").style.display = "block";
	document.getElementById("btnLogIn").style.display = "none";
	document.getElementById("inputConfrimPass").style.display = "block";
	}

function singUp(){
	alert();
	var apodo= document.getElementById("apodo").value;
	var email= document.getElementById("email").value;
	var pass = document.getElementById("pass").value;
	var passC = document.getElementById("passC").value;
	
	
	
	if(apodo != null & email!=null & pass !=null & (pass==passC)){
		alert("entramos");
	}else{
		alert("Error en Password");
	}
	
}