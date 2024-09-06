function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

 

//Utilizo el metodo "math.max()" para saber qué string tiene mayor longitud

let stringMasLargo = Math.max(str1.length, str2.length, str3.length)

//declaro una variable para corrobar si existe un argumento vacío
let stringFinal= ""


for(let i = 0 ; i < stringMasLargo ; i++){
// si el string en la posición [i] posee algún elemento, se lo añado al string final
if(str1[i])  stringFinal = stringFinal + str1[i] 
if(str2[i]) stringFinal = stringFinal  + str2[i]
if(str3[i])  stringFinal = stringFinal + str3[i] 
}

//aepnas termino el bucle, retorno el string más largo
return stringFinal}



module.exports = combine;