'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function Node(value){
  this.value = value;
  this.next = null;
}

function LinkedList(){
  this.head = null;
  this._length = 0;
}
// head -> 1 -> 10 -> 2 -> null

LinkedList.prototype.add = function(data){
  let node = new Node(data);
  let current = this.head; // con current voy a recorrer la lista empezando por el head de la lista. Current = nodo actual, que empieza con el valor que tiene el head (la cabeza de la lista) ya que se el primer elemento.

  if (!current){ // si current es igual a null, significa que la lista esta vacía, no tiene elementos.
    this.head = node; // le indicamos que current (es decir this.head) va a pasar a tomar el valor del node (primer node)
    this._length++ // aumentamos la longitud de la lista
    return node; // retornamos el nodo que ahora es el head
  }

  while (current.next !== null){ // hay algun elemento referenciado dentro de mi node.next? si es null, el while se rompe, mientras que si hay otro elemento, el current pasa ser el proximo elemento referenciado.
    current = current.next;
  }
  //cuando el current.next es null, pasamos a definir current.next como el nuevo nodo, y aumentamos en 1 el tamaño de la lista.
  current.next = node;
  this._length++ // 
  return node; 
}

LinkedList.prototype.remove = function(){
  let current = this.head; // creo el "contador" de la lista
  if (!current) return null; // me fijo si el head es null, si es null entonces retorno null
  else if (!current.next){ // si no es null, me fijo si el siguiente elemento es null
    let deleted = current.value;
    this.head = null;
    this._length--;
    return deleted; // si la cabeza no es null, pero el siguiente elemento es null (es decir solo hay un elemento), me guardo el valor de dicho elemento en una variable auxiliar, defino el el this.head = null para eliminar el único elemento que hay, y retorno el valor del auxiliar.
  }
  while (current.next.next){ // con esto checkeo que mi siguiente valor, también tenga su siguiente, es decir miro 2 casillas para adelante. Solo entro al while si es que hay un valor !== de null, en esa casilla que estoy mirando hacia adelante.
    current = current.next //  Si miro para dos casillas adelante y veo un valor, es decir es diferente de null, voy a tomar como current el valor de mi siguiente nodo, y volver a checkear la condicion anterior, y volvería a entrar al while.
  }

  // si llegué hasta acá es porque miré el de adelante y su siguiente era null, es decir que el nodo de adelante es el último de la lista.

  let deleted = current.next.value; // antes de borrar el ultimo nodo, debo asignar su valor a una variable que luego voy a retornar
  current.next = null; // le digo a mi nodo (donde estoy parado) que ya no mire al siguiente nodo (porque lo vamos a remover) entonces que mire a null (a la nada). Entonces pasaría a ser el último elemento
  this._length-- // le resto un elemento al contador de longitud
  return deleted ; // retorno el valor del nodo que eliminé.
}

LinkedList.prototype.search = function(value){ // recibo un valor que está dentro de un nodo, y debo encontrarlo. Si no lo encuentro, recibo null.
  let current = this.head;

  while (current){ // estoy iniciando el while solamente si el current es !== null, es decir que si la lista al menos tiene 1 elemento
   if (current.value === value){ // me fijo si el valor pasado por parametro es igual al valor de current.value
      return current.value // si se cumple, le retorno el current.value
    } 
    else if (typeof value == 'function'){ // en este caso me fijo si lo que me pasan por parámetro es una funcion
      if (value(current.value)) return current.value; //en caso de ser una funcion, se fija si el resultado es un valor que retorna true, y en caso de serlo, retorno current.value
    }
    
    current = current.next // si nada de lo anterior se cumple, el current avanza y se vuelve a verificar el while en el siguiente nodo, hasta que retorne en alguna de las condiciones anteriores
  }
  
  return null; // si ninguna de las condiciones del while se cumple en toda la lista, retorno null. Significa que el valor pasado por parámetro en search no existe en mi lista enlazda.
} 

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(key){
  let sum = 0;
  if (typeof key !== 'string') throw new TypeError ("Keys must be strings")
  
  for (let i=0; i < key.length; i++){
    sum += key.charCodeAt(i);
  }

  return sum % this.numBuckets;
}

HashTable.prototype.set = function(key, value){
  let index = this.hash(key)
  if (!this.buckets[index]){
    this.buckets[index] = {}
  }

  this.buckets[index][key] = value
}


HashTable.prototype.get = function(key){
  let index = this.hash(key);
  if (!this.buckets[index]) return null;
  return this.buckets[index][key];
}

HashTable.prototype.hasKey = function(key){
  let index = this.hash(key)
  if (!this.buckets[index]) return null;
  else {
    return this.buckets[index].hasOwnProperty(key)
  }
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
