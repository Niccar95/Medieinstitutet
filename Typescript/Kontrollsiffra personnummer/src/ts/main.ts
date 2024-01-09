import '../scss/style.scss'


const numberForm = document.getElementById("numberForm");

numberForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputNumberValue = (document.getElementById("numberInput") as HTMLInputElement).value;

  console.log(inputNumberValue);

  (document.getElementById("numberInput") as HTMLInputElement).value = "";

  let multipliedNumbers = "";

  for (let i = 0; i < inputNumberValue.length; i++) {
    
    let numbers = parseInt(inputNumberValue[i]);

    if (i % 2 === 1) {
      numbers *= 2;
    }

    multipliedNumbers += numbers.toString();

   let multipliedNumbersArray = multipliedNumbers.split("");



 console.log(multipliedNumbers);

 let sum: number = 0;

 for (let i = 0; i < multipliedNumbersArray.length; i++) {
  sum += parseInt(multipliedNumbersArray[i]);
}

console.log(sum);
  }

    
});


let numbers : number = 0;
let i = 10;

for(i = numbers-1; i >=0; i--) {

  console.log(numbers[i]);
}


