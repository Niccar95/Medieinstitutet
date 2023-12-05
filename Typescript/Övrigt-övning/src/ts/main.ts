import '../scss/style.scss'




const myInput = document.getElementById("myInput") as HTMLInputElement;
const myOtherInput = document.getElementById("myOtherInput") as HTMLInputElement;

const submitButton = document.getElementById("submitButton") as HTMLButtonElement;

submitButton.addEventListener("click", (e)=> {

  e.preventDefault();

 let myNumber: number = parseInt(myInput.value);
 let myOtherNumber: number = parseInt(myOtherInput.value);
 
 let sum: number = myNumber + myOtherNumber;

  const sumDisplay = document.getElementById("sumDisplay") as HTMLParagraphElement;

  sumDisplay.innerHTML = (sum).toString();

});


class Person {
  constructor(public name: string, public age: number, public hasSiblings: boolean) {}
}

const person: Person = new Person("Nicolas", 27, true);
const person2: Person = new Person("Isadora", 25, true);
const person3: Person = new Person("Antonia", 14, true);
const person4: Person = new Person("Vilma", 28, true);

const personList: Person[] = [person, person2, person3, person4];

const box = document.getElementById("box") as HTMLDivElement;
const list = document.createElement("ol");
  box.appendChild(list);


personList.forEach(onePerson => {
  
  const listItem = document.createElement("li");
  list.appendChild(listItem);

  listItem.innerHTML = (onePerson.name).toString();
});


