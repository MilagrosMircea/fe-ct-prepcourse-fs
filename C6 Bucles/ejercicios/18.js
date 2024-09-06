function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let resultado=1; 
for(let i=a;i<=b;i++){
resultado *=i
}
if(a<0 && b>0 || a===0 && b>0 ) {return 0} else if(a>0 && b>0)
{
  return resultado
}
}

module.exports = productoEntreNúmeros;