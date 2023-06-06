
var nombre = document.getElementById('name');
var telefono = document.getElementById('phone');
var email = document.getElementById('email');
var mensaje = document.getElementById('message');
error.style.color = "orange";


var form = document.getElementById("formulario");
var datosRecibidos = [];
nombre.focus();
form.addEventListener("submit", function (evento) {

  evento.preventDefault();
  var errores = []
  if (nombre.value === '') {
    errores.push("Ingrese su nombre")
  }

  if (telefono.value === '' || isNaN(telefono.value) || telefono.value.length !== 10) {
    errores.push("Ingrese su teléfono correctamente");
    errores.push("El teléfono debe tener 10 numeros");
  }
  if (email.value === '' || !validarEmail(email.value)) {
    errores.push("Ingrese su correo electrónico correctamente");
  }

  if (mensaje.value === '') {
    errores.push("ingresa tu mensaje");
  }
  if (errores.length === 0) {
    var datos = {
      nombre: nombre.value,
      telefono: telefono.value,
      email: email.value,
      mensaje: mensaje.value
    };
    datosRecibidos.push(datos);
    var datosIngresadosDiv = document.getElementById('datosIngresados');
    var datosIngresados = [];
    for (var i = 0; i < datosRecibidos.length; i++) {
      var dato = datosRecibidos[i];
      var datosEnLinea = `${dato.nombre}, ${dato.telefono}, ${dato.email}, ${dato.mensaje}`;
      datosIngresados.push(datosEnLinea);
    }
    
      datosIngresadosDiv.innerHTML = `<h3>Gracias por contactarte con nosotros:</h3><p>${datosIngresados.join('<br>')}</p>`;

      datosIngresadosDiv.style.color = "orange";

    nombre.value = '';
    telefono.value = '';
    email.value = '';
    mensaje.value = '';
    console.log("Formulario enviado correctamente")
  }
 
  error.innerHTML = errores.join(', ');

});
function validarEmail(email) {
  var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  return re.test(email);
}






