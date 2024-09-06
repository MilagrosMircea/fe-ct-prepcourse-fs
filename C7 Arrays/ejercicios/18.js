function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  
    // Verifica si el arreglo está vacío para evitar división por cero
    if (resultadosTest.length === 0) {
      return 0;
    }
    
    let suma = 0;
  
    // Itera sobre los elementos del arreglo resultadosTest
    for (let i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i]; //sumamos todos los elementos del array junto con "suma"
    }                              //en cada iteración del bucle. Una vez terminado, 
                                    // lo dividimos por la longitud del array, es decir,
                                     //la cantidad de elementos que contiene el array y eso nos  
                                     //da el promedio.
    // Calcula el promedio
    let promedio = suma / resultadosTest.length;  
    
    return promedio;
}

module.exports = promedioResultadosTest;
