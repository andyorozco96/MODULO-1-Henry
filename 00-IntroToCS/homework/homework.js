'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /*
  1) Invertir el numero brindado en num

  */

let numReverse = num.split("").reverse();
let decimal = 0;
let suma;

 for (let i = 0; i < numReverse.length; i++){
    suma = (numReverse[i] * Math.pow(2,i));
    decimal = suma + decimal;
 }

 return decimal;

}

function DecimalABinario(num) {
  // tu codigo aca
  
  
  let binarioFinal = [];
  while (num !== 0) {
    binarioFinal.push(num % 2);
    num = Math.floor(num / 2);
  } 
  return binarioFinal.reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}