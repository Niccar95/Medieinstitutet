import '../scss/style.css'
import { MenuFoods } from './models/menuFoods';


  class Person {
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






//Extra uppgift


/*
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

  */


  /* const menuItems = new MenuFoods("Prosciutto", "Meatballs", "Cake");
  const menuItems2 = new MenuFoods("Shrimp", "Lamb", "Sorbet");

  

  console.log(menuItems);

  const menuContainer = document.createElement("section");
  document.body.appendChild(menuContainer);

  const listOfItems = [menuItems, menuItems2];

  for (let i = 0; i < listOfItems.length; i++) {
    const menu = document.createElement("ul");
    const menuList = document.createElement("li");
    
    menuContainer.appendChild(menu);
    menu.appendChild(menuList);

    const menu2 = document.createElement("ul");
    const menuList2 = document.createElement("li");
    menuList.appendChild(menu2);
    menu2.appendChild(menuList2);

    menuList.innerHTML = "Appetizers: " + listOfItems[i].appetizer;
    menuList2.innerHTML = "Main dishes: " + listOfItems[i].mainDish;

  }

  */


  const menuContainer = document.createElement("div");
document.body.appendChild(menuContainer);

const menu = document.createElement("ul");
menuContainer.appendChild(menu);

const menuList1 = document.createElement("li");
menuList1.textContent = "Category 1";
menu.appendChild(menuList1);

const menuList2 = document.createElement("ul");
menuList1.appendChild(menuList2);

const subMenuItem1 = document.createElement("li");
subMenuItem1.textContent = "Subcategory 1.1";
menuList2.appendChild(subMenuItem1);

const subMenuItem2 = document.createElement("li");
subMenuItem2.textContent = "Subcategory 1.2";
menuList2.appendChild(subMenuItem2);

const menuList3 = document.createElement("li");
menuList3.textContent = "Category 2";
menu.appendChild(menuList3);

const menuList4 = document.createElement("ul");
menuList3.appendChild(menuList4);

const subMenuItem3 = document.createElement("li");
subMenuItem3.textContent = "Subcategory 2.1";
menuList4.appendChild(subMenuItem3);

const subMenuItem4 = document.createElement("li");
subMenuItem4.textContent = "Subcategory 2.2";
menuList4.appendChild(subMenuItem4);


    






  
  
  







  








