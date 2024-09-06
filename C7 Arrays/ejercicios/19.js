function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

      // Verifica si no se pasaron argumentos
      if (arguments.length === 0) {
        return 0;
      }
    
      // Si solo hay un argumento, retórnalo directamente
      if (arguments.length === 1) {
        return arguments[0];  //ponemos desde posición 0 ya que suponemos que sólo hay un argumento
                               // y que es el primero
      }
    
      // Si hay más de un argumento, multiplica todos los argumentos
      let producto = 1; // Empezamos con 1 ya que con 0 el resultado sería =0
    
      for (let i = 0; i < arguments.length; i++) {
        producto *= arguments[i];
      }
    
      return producto;
}

module.exports = multiplicarArgumentos;
