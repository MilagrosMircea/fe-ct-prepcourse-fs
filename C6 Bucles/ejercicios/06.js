function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
   // Convierte el número a una cadena y verifica si su longitud es 3
  // Utilizamos Math.abs para manejar números negativos

  if(Math.abs(num).toString().length === 3){
    return true}
     else { return false} 

}

module.exports = tieneTresDigitos;
