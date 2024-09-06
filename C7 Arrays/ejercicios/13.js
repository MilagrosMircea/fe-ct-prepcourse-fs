function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  let nuevoArray = array.filter(function(elemento)
  {elemento % 2 === 0});
  
  // Retornamos el nuevo arreglo
  return nuevoArray;
}

module.exports = filtrarNumerosPares;
