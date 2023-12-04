import './style.css'

let mellanslag = " ";

const mittNamn = "Nicolas";

const app = document.getElementById("app") as HTMLDivElement;


console.log("Ditt namn är", mittNamn.length, "bokstäver lång");

for (let i = 0; i <= mittNamn.length-1; i++) {

  
  if (i < mittNamn.length-1) {
    mellanslag += mittNamn[i] + " ";
  }

  else {
    mellanslag += mittNamn[i];
  }
}

app.innerHTML = mellanslag;




const text = document.createElement("p");

app.appendChild(text);

let space = "";

let sum = 0;

const numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= numbers.length -1; i++) {

sum += numbers[i];

  if (i < numbers.length -1) {
    space += numbers[i] + " + ";
  }

  else {
    space += numbers[i];
  }
    
  //text.innerHTML = space;

  //text.innerHTML = sum += numbers[i];
}

text.innerHTML = space + " " + " = " + sum;


const list = document.createElement("ul");
app.appendChild(list);




const animals: string[] = ["Dog", "Zebra", "Penguin", "Lion", "Gorilla", "Kangaroo"];


for (let i = 0; i <= animals.length -1; i++) {

let listItem = document.createElement("li");
list.appendChild(listItem);
listItem.innerHTML = animals[i];
  
}
 




