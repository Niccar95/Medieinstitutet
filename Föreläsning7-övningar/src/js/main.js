import './../scss/style.css'


/* class Person {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}


window.onload = function (){
  const person = new Person("Nicolas", "Carrasco", "27");
  console.log(person);
  const personInfo = document.createElement("p");
  document.body.appendChild(personInfo);

  personInfo.innerHTML = person.age;

  const person2 = new Person("Antonia", "Carrasco", "14");
  console.log(person2);

  const personList = [person, person2];

  for (let i = 0; i < personList.length; i++) {

    
    const unorderedList = document.createElement("ul");
    const list = document.createElement("li");
    document.body.appendChild(unorderedList);
    unorderedList.appendChild(list);

    list.innerHTML = personList[i].firstName + " " + personList[i].lastName + " " + personList[i].age;
  
}

}


*/



const itemList = ["Juice", "Apple", "Eggs"];
const mainContainer = document.createElement("div");

const section = document.createElement("section");
document.body.appendChild(section);



itemList.forEach((products) => {


const itemContainer = document.createElement("div");

document.body.appendChild(mainContainer);
mainContainer.appendChild(itemContainer);

mainContainer.className = "mainContainer";

const items = document.createElement("h2");
itemContainer.appendChild(items);
itemContainer.className = "itemContainer";

items.innerHTML = products;



itemContainer.addEventListener("click", () => {
section.innerHTML += " " + products;

})
  
  })
  








