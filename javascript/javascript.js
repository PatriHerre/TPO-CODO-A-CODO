document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    alert('No has escrito nada en el NOMBRE');
    return;
  }
  var apellido = document.getElementById('apellido').value;
  if(apellido.length == 0) {
    alert('No has escrito nada en el APELLIDO');
    return;
  }
  var telefono = document.getElementById('telefono').value;
  if(telefono.length == 0) {
    alert('No has escrito nada en TELEFONO');
    return;
  }
  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No has escrito el Mail');
    return;  
  }
  alert('Muchas Gracias');
  this.submit();    
}
