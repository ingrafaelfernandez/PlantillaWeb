

window.onload = function() {
    document.getElementById("nuevosUsuarios").style.display = "none";;
  }
  
    
 
/* Funcion de unicio de sesion */
function iniciarsesion(){
    
    console.log("Bienvenido");
    /* let user =  prompt("Nombre de Usuario ");
    let contraseña = prompt("Contrasena "); */
    const arrUsuarios = [
        { nombre: "user1", pass: "user1" },
        { nombre: "user2", pass: "user2",},
        
      ];
      


if (user===arrUsuarios[0].nombre && contraseña===arrUsuarios[0].pass){
    
    console.log("Bienvenido USER 1");
    alert("Bienvenido USER 1");
    document.write("<h2 id='usuario'>Bienvenido Usuario 1 <h2>");
}
if (user===arrUsuarios[1].nombre && contraseña===arrUsuarios[1].pass){
    
    console.log("Bienvenido USER 2");
    alert("Bienvenido USER 2");
    document.write("<h2 id='usuario'>Bienvenido Usuario 2 <h2>");
}
else{
    console.log("No has iniciado Sesion");
    alert("No has iniciado Sesion");
}

} 
iniciarsesion();


 