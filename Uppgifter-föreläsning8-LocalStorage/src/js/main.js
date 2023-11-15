import '../scss/style.scss'
import { Person } from './models';

localStorage.setItem("Name", "Nicolas");

const myName = localStorage.getItem("Name");

const nameTag = document.createElement("p");
const container = document.getElementById("app");
container.appendChild(nameTag);

nameTag.innerHTML = myName;

const person = new Person("Vilma", "Mannermaa", "28");
const person2 = new Person("Antonia", "Carrasco", "14");

let personList = [person, person2];

localStorage.setItem("PersonInfo", JSON.stringify(personList));

 personList = JSON.parse(localStorage.getItem("PersonInfo"));

 const removeButton = document.createElement("button");
  app.appendChild(removeButton);
  removeButton.innerHTML = "Remove from list";

personList.forEach((P, i) => {
  const unorderedList = document.createElement("ul");
  const list = document.createElement("li");
  app.appendChild(unorderedList);
  unorderedList.appendChild(list);

  const unorderedList2 = document.createElement("ul");
  const list2 = document.createElement("li");
  unorderedList.appendChild(unorderedList2);
  unorderedList2.appendChild(list2);

  list.innerHTML = P.firstName;
  list2.innerHTML = P.lastName;

  

});



