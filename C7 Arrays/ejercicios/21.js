function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  
let mesesFiltrados= array.filter(function(mes)
{
  if(mes === 'Enero'|| mes  ==='Marzo'|| mes==='Noviembre'){
    return mes }})

    if( mesesFiltrados.length === 3 ) { return mesesFiltrados} else{ return "No se encontraron los meses pedidos"
}
}
module.exports = mesesDelAño;
