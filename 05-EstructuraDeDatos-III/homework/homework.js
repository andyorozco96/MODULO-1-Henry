'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests



function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


// --------------->  arbol de ejemplo 5 - 4 - 9 - 7 - 3 - null <----------------
/*                      (5)
                      /     \
                  (4)         (9)
                  /  \       /  \
                (3) null    (7) null
*/

//
BinarySearchTree.prototype.size = function(){
  // caso de que sea un nodo hoja (no tiene hijos)
  if (!this.left && !this.right) return 1;

  // caso de que tenga un solo hijo (ya sea izq o derecha)
  else if (!this.left) return 1 + this.right.size();

  else if (!this.right) return 1 + this.left.size();

  // caso de que tenga ambos hijos
  else return 1 + this.right.size() + this.left.size();
};


BinarySearchTree.prototype.insert = function(value){
  // lo primero que tengo que saber es si el valor que me pasan es MAYOR o MENOR a nuestro this.value

  // Acá pregunto si el valor es MAYOR a nuestro this.value
  if (value > this.value){
    // Si es mayor, pregunto si existe algo en mi this.right
    if (this.right){
      // Si existe algo en mi this.right, tengo que volver a iniciar el insert para ir arriba y e iniciar de nuevo, hasta que no haya nada en mi this.rigth (es decir sea null) ya que esa sería la última posicion y me podría ubicar.
      this.right.insert(value)
    }

    // en caso de que no exista nada en this.right, ubico el nuevo nodo acá.
    else this.right = new BinarySearchTree(value)
  }

  // Si mi valor es menor al this.value no entra arriba y pasa para acá
  else{
    // pregunto si existe un this.left o es null
    if (this.left){
      // si existe mi this.left tengo que reiniciar el insert e ir arriba de nuevo y volver a preguntar si es mayor o menor
      return this.left.insert(value)
    }
    // si no hay nada en mi this.left entonces puedo insertar el nuevo valor acá.
    else this.left = new BinarySearchTree(value)
  }
};

BinarySearchTree.prototype.contains = function(value){
  // pregunto si mi this.value es igual al valor pasado por parametro, en caso de que sea verdad, retorno true.
  if (this.value === value) return true;
  // si lo anterior no es verdad, entonces pregunto si el valor pasado por parámetro es menor a mi this.value
  else if (value < this.value){
    // en caso de que sea menor, pregunto si existe algo en mi this.left (donde van los valores menores), si no hay nada en mi this.left significa que el valor que nos pasaron por parámetro no existe en nuestro árbol, entonces retorno false.
    if (!this.left) return false;
    // en caso de que si haya algo en nuestro this.left, vuelvo a ejecutar contains y paso de vuelta a preguntarle si this.value === value (se reinicia, recursividad)
    else return this.left.contains(value)
  }

  // lo MISMO que arriba pero en caso de que nuestro valor sea MAYOR a mi this.value
  else if (value > this.value){
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){

  // primero el in-order
  if (order === "in-order" || !order){
    if (this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if (this.right) this.right.depthFirstForEach(cb,order)
    } 

  // segundo el "pre-order"  
    else if (order === "pre-order"){
    cb(this.value)
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb,order)

  // por ultimo el "post-order"
  } else {
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb,order)
    cb(this.value)
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb , array = []){
  cb(this.value)
  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);
  array.length && array.shift().breadthFirstForEach(cb,array);
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
