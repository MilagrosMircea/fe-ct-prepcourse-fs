function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  let cantDeNumeros = array.filter(function(numeros)
{if(numeros>10) {return numeros} }) 

return cantDeNumeros
}

module.exports = contarElementosMayoresA10;
