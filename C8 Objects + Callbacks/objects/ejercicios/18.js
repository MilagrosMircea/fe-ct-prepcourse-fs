function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo. 
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.   objetoUsuario{amigos=[1,2,..nuevoAmigo]}
  // Tu código:

if(!Array.isArray(objetoUsuario.amigos)) 
{ objetoUsuario.amigos=[];}

objetoUsuario.amigos.push(nuevoAmigo)

return objetoUsuario
}

module.exports = agregarAmigo;
