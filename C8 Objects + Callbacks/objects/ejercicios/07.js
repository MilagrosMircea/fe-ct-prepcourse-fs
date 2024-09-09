function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]   sortBy=letra list=arr=[obj{}]
   // Tu código:
   
//accedemos a la propiedad sortBy mediante [] y la organizamos de mayor a menor
   let nuevoObjeto= list.sort(function(a,b)
   {
      if(a[sortBy] < b[sortBy])
          { return 1} else
       if(a[sortBy]>b[sortBy]) { return -1 }
   else { return 0}
   })
   return nuevoObjeto}

module.exports = sort;
