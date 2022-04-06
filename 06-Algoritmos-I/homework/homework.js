'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [1]
  var divisor = 2

  while (num > 1){
    if (num % divisor === 0){
    array.push(divisor);
    num = num / divisor;
    } else {
    if (divisor % 2 === 0) divisor++
    else divisor += 2;
    }
  }
  return array;
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
  var completed = true

  while (completed){
    completed = false;
    for (let i = 0; i < array.length - 1; i++){
      if (array[i] > array[i+1]){
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        completed = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
  for (let i = 1; i < array.length; i++){
    let j = i - 1
    let aux = array[i]
    while (j >= 0 && aux < array[j]){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // 1° necesito encontrar el valor minimo
  // 2° tomo el primer valor y lo voy comparando con el siguiente para ver si el siguiente es menor
  // 3° si el siguiente es MENOR, tomo ese valor, y sigo comparando con los siguientes
  // 4° cuando verifico que realmente es el menor de todo el array, lo coloco en la posicion 0
  // 5° agarro el siguiente elemento y vuelvo a iniciar, sin recorrrer la posicion 0
  // ej: [5, 1, 4, 2, 8]

  for (let i = 0; i < array.length - 1; i++){
    var min = i;
    for (let j = i + 1; j < array.length; j++){
      if (array[min] > array[j]){
        min = j;
      }
    } 
    if (min !== i){
      var aux = array[i];
      array[i] = array[min];
      array[min] = aux; 
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
