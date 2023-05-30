
var nombre = document.getElementById('name');
var telefono = document.getElementById('phone');
var email = document.getElementById('email');
var  mensaje = document.getElementById('message');
error.style.color="orange";

var form= document.getElementById("formulario");
form.addEventListener("submit",function(evento){

 evento.preventDefault();
 var errores=[]
 if(nombre.value ===''){
  errores.push("Ingrese su nombre")
 }
 
 if (telefono.value === '' || isNaN(telefono.value) || telefono.value.length !== 10) {
    errores.push("Ingrese su teléfono correctamente");
    errores.push("El teléfono debe tener 10 caracteres");
  }
  if (email.value === '' || !validarEmail(email.value)) {
    errores.push("Ingrese su correo electrónico correctamente");
  }
  
  if(mensaje.value ===''){
      errores.push("ingresa tu mensaje");
  }
  if (errores.length === 0) {

    nombre.value = '';
    telefono.value = '';
    email.value = '';
    mensaje.value = '';
    console.log("Formulario enviado correctamente")
  }

error.innerHTML=errores.join(', ');

});
function validarEmail(email) {
  var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  return re.test(email);
}





