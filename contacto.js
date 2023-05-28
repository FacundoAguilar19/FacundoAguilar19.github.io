
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
  errores.push("ingrese su nombre")
 }
 

 if(telefono.value ===null || telefono.value ===''){
  errores.push("ingrese tu telefono")
 }

 if(email.value ===null || email.value ===''){
  errores.push("ingresa tu email")
 }
  
  if(mensaje.value ===null || mensaje.value ===''){
      errores.push("ingresa tu mensaje");
  }
  

error.innerHTML=errores.join(', ');

});






