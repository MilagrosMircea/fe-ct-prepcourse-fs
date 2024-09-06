function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  
  let count = 0; // Contador de iteraciones

  do {
      num += 5; // Aumenta el valor de num en 5
      count++; // Incrementa el contador
  } while (count < 8); // Repite hasta 8 veces

  return num; // Retorna el valor final
}

module.exports = doWhile;