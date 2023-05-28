
var nombre = document.getElementById('name');
var telefono = document.getElementById('phone');
var email = document.getElementById('email');
var  mensaje = document.getElementById('message');
error.style.color="orange";

var form= document.getElementById("formulario");
form.addEventListener("submit",function(evento){

 evento.preventDefault();
 var errores=[]
 if(nombre.value ===null || nombre.value ===''){
  errores.push("Ingrese su nombre")
 }
 
 if (telefono.value === null || telefono.value === ''||telefono.value.length > 10) {
    errores.push("Ingrese su teléfono correctamente");
    errores.push("El teléfono debe tener como máximo 10 caracteres");
  }
 if(email.value ===null || email.value ===''){
  errores.push("ingresa tu email")
 }
  
  if(mensaje.value ===null || mensaje.value ===''){
      errores.push("ingresa tu mensaje");
  }
  

error.innerHTML=errores.join(', ');

});






