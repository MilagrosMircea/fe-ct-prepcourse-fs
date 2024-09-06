function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

}  for (let i = 1; i < array.length; i++) {
    if (typeof array[i] === 'number')  //Utilizamos el valor "0" para i a pesar de que nos de 0,
                                         //ya que esto, según la lógica del ejercicio, es válido, debido
                                          //  a que estamos en el comienzo del bucle y array siempre arranca
                                          // desde 0
  {resultado.push(array[i] * i);
    } else {
      resultado.push(NaN); // O manejarlo de otra manera según las necesidades. NAN es no es un NUMERO
    }                      //Not a  Number 
  }
  
  return resultado;

module.exports = multiplicarElementosPorIndice;
