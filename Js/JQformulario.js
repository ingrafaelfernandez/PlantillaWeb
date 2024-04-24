//Con esto prevenimos la funcion predeterminada del boton de un formulario que hace que se recargue la pagina.
document.getElementById("cajacomentarios").addEventListener("submit", function (event) {
    event.preventDefault();
});
window.onload = function() {
    document.getElementById("formularioRespuesta").style.display = "none";;
  }

function formulario() {

    document.getElementById("EnviarComentarios").addEventListener("click", function() {
    const x = document.getElementById("cajacomentarios");
    const nombre = x.elements["nomb"].value;
    const apellido = x.elements["apell"].value;
    const cajadecomentario = x.elements["cajacomentario"].value;
    console.log("Nombre: " + nombre + " Apellido: " + apellido + " Comentarios: " + cajadecomentario);
   /*  document.getElementById("miDiv").innerHTML = "Nombre: " + nombre + "<br>Apellido: " + apellido + "<br>Comentario: " + cajadecomentario; */
    

     if(nombre !== "" && apellido !== "" && cajadecomentario !==""){
        document.getElementById("cajacomentarios").style.display = "none";
        document.getElementById("formularioRespuesta").style.display = "block";
        document.getElementById("Rnomb").value = nombre;
        document.getElementById("Rapell").value = apellido;
        document.getElementById("Rcajacomentario").value = cajadecomentario;
        document.getElementById("Rimprimircomentario").value = "Imprimir comentario";
     }
     
     
        
      });
}

formulario();


/* Imprimir formulario en html */
function imprimir() {
    const contenido = document.getElementById("formularioRespuesta").innerHTML;
    const contenidoOriginal = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;
}
///// <input type="button" value="Imprimir" onclick="imprimir()">