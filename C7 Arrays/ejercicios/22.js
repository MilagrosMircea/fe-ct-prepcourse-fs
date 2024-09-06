function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let tablas=[];

//ponemos mayor o igual a diez ya que se va a multiplicar en cada bucle de 
// 0 a 10 por 6
for(let i = 0 ; i <=10 ; i++){
  tablas.push(6*i)
}
return tablas
}


module.exports = tablaDelSeis;
