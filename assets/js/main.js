
function validar(){
  var  nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var cumple = document.getElementById("cumple").value;
  var celular = document.getElementById("celular").value;
  var telefono = document.getElementById("telefono").value;
  var clave = document.getElementById("clave").value;
  var confirmar = document.getElementById("confirmar").value;
  var coments = document.getElementById("comentarios").value;
  var checkbox = document.getElementById("checkbox").value;

  if(clave == confirmar){
    this.nextElementSibling.nextElementSibling.innerText= " ";
    return true;
  }
  else{
    this.nextElementSibling.nextElementSibling.innerText= "No coinciden. Vuelva a ingresar su clave";
    return false;
  }

}


// Regex : Expresiones regulares a usar //

var regname;
