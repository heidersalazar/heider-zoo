
function enviarFormulario(){
	var chequear = true;
  var nombres = document.getElementById("nombres").value;
	var apellidos = document.getElementById("apellidos").value;
	var cedula = document.getElementById("cedula").value;
	var correo = document.getElementById("correo").value;
  var cargos = document.getElementById("cargos").value;
  var telefono = document.getElementById("telefono").value;
  var direccion = document.getElementById("direccion").value;
	var GF = document.getElementById("F");
	var GM = document.getElementById("M");

	 if (nombres=="") {
         alert("Los campos son obligatorios: Nombres");
         chequear = false;
       
         } else chequear= true;

   if (apellidos=="") {
         alert("Los campos son obligatorios: Apellidos");
         chequear = false;
       
         } else chequear = true;

  if (cedula=="") {
         alert("Los campos son obligatorios: Cedula");
         chequear = false;
       
         }else chequear= true;
            
      
  if (correo=="") {
         alert("Los campos son obligatorios: Correo Electrónico");
         chequear = false;
       
         }
         else chequear = true;
  
  if (cargos=="") {
         alert("Los campos son obligatorios: Cargos");
         chequear = false;
       
         }
         else chequear = true;
  
  if (telefono=="") {
         alert("Los campos son obligatorios: Telefono");
         chequear = false;
       
         }else 
             chequear = true; 
  if (direccion=="") {
         alert("Los campos son obligatorios: Direccion");
         chequear = false;
       
         }else 
             chequear = true;                                                 

     if(!GF.checked && !GM.checked){
           alert("Debes elegir un genero");
            chequear = false;
            GF.focus();
         } else 
             chequear = true;


   if (chequear){
   alert ("Enviando el Formulario a procesar ");
    document.getElementById("formulario").submit();
     } 
}

function  salir() {
  var resp= confirm("¿Desea  Cerrar la Aplicación?");
  if (resp==true){
    alert("Hasta Pronto vuelvanos a visitar ");
        window.close();
         }
}

function Borrar() {
alert("Borrando");
document.getElementById("formulario").reset();
}

window.onload = function () {

var btnEnviar, btnBorrar,btnCerrar;
 
 btnEnviar = document.getElementById("enviar");
btnEnviar.onclick = enviarFormulario;

 btnBorrar = document.getElementById("borrar");
 btnBorrar.onclick = Borrar;

 btnCerrar = document.getElementById("cerrar");
 btnCerrar.onclick = salir;

}






