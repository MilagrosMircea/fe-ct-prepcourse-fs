function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
   // Verifica que el array no esté vacío para evitar errores.
   if (array.length === 0) {
    return 0; // Devuelve 0 o algún valor que indique que el array está vacío.
  }

  // Inicializa el índice del elemento más grande y el valor más grande. Ambos en el mismo  numero.
  //ambas variables son solamente para tener una referencia.
  let indiceMasGrande = 0;
  let valorMasGrande = array[0];

  // Recorre el array para encontrar el valor más grande y su índice.
  //SE EMPIEZA A RECORRER DESDE 1 PORQUE EL PRIMER ELEMENTO YA FUE CONSIDERADO array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > valorMasGrande) {
      valorMasGrande = array[i];
      indiceMasGrande = i;
    }
  }

  return indiceMasGrande

}


module.exports = encontrarIndiceMayor;
