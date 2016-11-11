function agregaPosteo() {


  var containerPosteos = document.getElementById("contenedor-posteos");
  var nombreFF = document.getElementById("nombre").value;
  var contenidoFF = document.getElementById("cajaposteos").value;

 
  var nuevoPost = document.createElement("div");


  var contenedorNombre = document.createElement("strong");
  var contenedorPost = document.createElement("p");

  var nodoNombre = document.createTextNode(nombreFF + " escribió:");
  var nodoPosteo = document.createTextNode(contenidoFF);

  contenedorNombre.appendChild(nodoNombre);
  contenedorPost.appendChild(nodoPosteo);


  nuevoPost.appendChild(contenedorNombre);
  nuevoPost.appendChild(contenedorPost);
}