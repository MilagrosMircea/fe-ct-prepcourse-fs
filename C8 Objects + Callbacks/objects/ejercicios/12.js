function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
let resultado=0;

  for(const numeroMisterioso in objetoMisterioso){
resultado=numeroMisterioso*5    
  }
  return resultado
}

module.exports = multiplicarNumeroDesconocidoPorCinco;
