function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length === 0 || array.length === 1) {
    return true;
  }

  // Obtiene el primer elemento del array para compararlo con los demás
  const primerElemento = array[0];

  // Recorre el array y compara cada elemento con el primer elemento
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== primerElemento) {
      return false; // Si encontramos un elemento diferente, retorna false
    }
  }

  // Si todos los elementos son iguales, retorna true
  return true;
}

module.exports = todosIguales;
