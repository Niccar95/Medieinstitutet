import './../scss/style.css'



/*
const app = document.getElementById("app");

const myInput = document.createElement("input");
const myButton = document.createElement("button");
myButton.innerHTML = "Submit guess";

app.appendChild(myInput);
app.appendChild(myButton);


// Uppgift 1:
const theNumber = 34;
let theGuess = 0; // 0 för att visa att datatypen är ett nummer och inte en tex string. 
myButton.addEventListener("click", () => {
    
while (theGuess !== theNumber) {
    theGuess = +prompt("Gissa") // + omvandlar string till datatypen number
     if(theGuess > theNumber) {
        alert("Your number is to high!");
     } 
    else if (theGuess < theNumber) {
      alert("Your number is to low!");
    }
    else {
        alert("You guessed it right!");
    }
 }
}); 

*/


//uppgift 2

/*const bestDrinks = ["Mojito", "GT", "Daiquiri", "Hallonsaft"];

const drinkList = document.createElement("ol");
const app = document.getElementById("app");

app.appendChild(drinkList);

bestDrinks.forEach((value) => {
    const div = document.createElement("div");
   const li = document.createElement("li");
   li.innerHTML = value;
   div.className = "box";

   div.appendChild(li)
   drinkList.appendChild(div);

   div.addEventListener("click", () => {
    console.log ("du valde: ",value);
   });
        
});

*/


const app = document.getElementById("app");

const myInput = document.createElement("input");
const myButton = document.createElement("button");
myButton.innerHTML = "Submit guess";

app.appendChild(myInput);
app.appendChild(myButton);


// Uppgift extra påbyggnad på uppgift 1. Vi ska nu kunna ändra siffran 34 till nåt annat:

let theNumber = 0;
let theGuess = 0; // 0 för att visa att datatypen är ett nummer och inte en tex string.

myInput.setAttribute("type", "password");


myButton.addEventListener("click", () => {
      theNumber = +myInput.value;
while (theGuess !== theNumber) {

    theGuess = +prompt("Gissa") // + omvandlar string till datatypen number
     if(theGuess > theNumber) {
        alert("Your number is to high!");
     } 
     if (theGuess < theNumber) {
      alert("Your number is to low!");
    }
    
 }
    confirm("You guessed it right!");
}); 
