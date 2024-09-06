function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  
  for (let i = 2; i <numero;i++) {
    if (numero % i === 0) {
        return false; // si el numero es divisible por algún otro y nos da 0 retornamos false 
                       //ya que no es primo
    }
}

return true; // Si no se encontró ningún divisor, el número es primo
}

module.exports = esNumeroPrimo;
