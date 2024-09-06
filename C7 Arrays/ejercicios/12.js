function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
    let nuevoArray = array.map(function(elemento) {
      return  elemento.toUpperCase();});
       
   return nuevoArray

}

module.exports = convertirStringAMayusculas;
