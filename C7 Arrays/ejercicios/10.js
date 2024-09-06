function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

   // Encuentra el primer string que tiene más de 5 caracteres.
   const stringLargo = array.find(element => typeof element === 'string' && element.length >= 5);
  
   // Retorna el primer string largo encontrado o undefined si no se encuentra ninguno.
   return stringLargo; 
}

module.exports = obtenerPrimerStringLargo;
