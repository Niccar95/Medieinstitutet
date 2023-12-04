import { Person } from './models';
import './style.css'


localStorage.setItem("Name", "Nicolas");

const myName = localStorage.getItem("Name");

const nameTag = document.createElement("p");
const container = document.getElementById("app") as HTMLDivElement;
container.appendChild(nameTag);

if(myName !== null) {

  nameTag.innerHTML = myName;

}

const person: Person = new Person("Vilma", "Mannermaa", 28);
const person2: Person = new Person("Antonia", "Carrasco", 14);

let personList: Person[] = [person, person2];

localStorage.setItem("PersonInfo", JSON.stringify(personList));

  personList = JSON.parse(localStorage.getItem("PersonInfo") || "[]");
 
 const removeButton = document.createElement("button");
  container.appendChild(removeButton);
  removeButton.innerHTML = "Remove from list";

personList.forEach((P, i) => {
  const unorderedList = document.createElement("ul");
  const list = document.createElement("li");
  container.appendChild(unorderedList);
  unorderedList.appendChild(list);

  const unorderedList2 = document.createElement("ul");
  const list2 = document.createElement("li");
  unorderedList.appendChild(unorderedList2);
  unorderedList2.appendChild(list2);

  list.innerHTML = P.firstName;
  list2.innerHTML = P.lastName;

  removeButton.addEventListener("click", () => {
    personList.splice(i, 1);
    list.innerHTML = " ";
    
  });
});






