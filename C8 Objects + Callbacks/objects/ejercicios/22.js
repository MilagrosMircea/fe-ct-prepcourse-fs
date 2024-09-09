function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
let string1=str1.toUpperCase();
let string2=str2.toUpperCase();

if(string1.split('').reverse().sort().join('')===string2.split('').reverse().sort().join('')) { return true} else {return false}
}

module.exports = esAnagrama;
