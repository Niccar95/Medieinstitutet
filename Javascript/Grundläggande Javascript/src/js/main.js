/*

function myAwesomeFunction(){
let myName = "Nicolas";
let x = 5;
let y =  10;
console.log(myName);

console.log(x + y);
x++;
y++;
console.log(x);
console.log(y);
}

*/



let personalNumber = prompt("Please enter your personal number:");

function counting(personalNumber) { 
  let count = 0; 
  for (let n = personalNumber; n > 0; n = Math.floor(n / 10)) { 
      count++; 
  } 
  return count; 
} 

let newNumber = Number(personalNumber.toString().slice(0, -1))
console.log(newNumber);

let = newNumber;
let newPersonalNumber = ParseInt(newNumber);






/* beräkna kontrollsiffran i personnummer */

const pnr = "951216337";

let sum = 0;

for (let i = 0; i < pnr.length; i++) {
  const currentNumber = +pnr[i];
  if(1 % 2 === 0) {
    // * 2
    const prod = currentNumber * 2;
    if(prod > 9) {
      1 + prod % 10;
    } 
    else {
      sum += prod;
    }

  } else {
    // * 1
    sum += currentNumber;

  }
}

const controlNumber = 10 - (sum % 10);

console.log(pnr + controlNumber);



