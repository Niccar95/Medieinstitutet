import '/src/scss/style.scss'

const mainContainer = document.createElement("section");
mainContainer.className = "mainContainer";


const buttonSection = document.createElement("section");
buttonSection.id = "buttonSection";

mainContainer.appendChild(buttonSection);



const items = ["Chips", "Soda", "Candy", "Milk", "Tomatoes"];

 const emptyCartButton = document.createElement("button");
buttonSection.appendChild(emptyCartButton);
emptyCartButton.innerHTML = "Empty Cart";

const cartItems = document.createElement("p");
document.body.appendChild(cartItems);


const counter = document.createElement("p");
    document.body.appendChild(counter);
    counter.innerHTML = "There's no Items in your cart";


let quantity = 0;

//funktion för att lägga till och ta bort produkter i varukorgen

items.forEach((products) => {

  const itemContainer = document.createElement("section");
  itemContainer.className = "itemContainer";
  app.appendChild(mainContainer);
  mainContainer.appendChild(itemContainer);


  const itemNames = document.createElement("h2");
  itemContainer.appendChild(itemNames);
  itemNames.innerHTML = products;

  const addButton = document.createElement("button");
const removeButton = document.createElement("button");

addButton.className= "addButton";
removeButton.className= "removeButton";

addButton.innerHTML = "+";
removeButton.innerHTML = "-";

itemContainer.appendChild(addButton);
itemContainer.appendChild(removeButton);

removeButton.disabled = true;


   //Event för knapparna
  addButton.addEventListener("click", () => {

    quantity++;

    cartItems.innerHTML ="You have added " + products + " to your cart";

    counter.innerHTML = "Amount of items in your cart: " + parseInt(quantity);

    if (quantity >= 1) {
      removeButton.disabled = false;
    }
  })

  removeButton.addEventListener("click", () => {

    quantity--;

    cartItems.innerHTML ="You have removed " + products + " from your cart";

    counter.innerHTML = "Amount of items in your cart: " + parseInt(quantity)
    
    
    if (quantity == 0 && quantity > -1) {
      cartItems.innerHTML = "";
      counter.innerHTML = "There's no items in your cart";
      removeButton.disabled = true;
    }

  })

  emptyCartButton.addEventListener("click", () => {

    cartItems.innerHTML = " ";
    counter.innerHTML = "There's no items in your cart";
    quantity = 0;
    removeButton.disabled = true;
  })

  itemContainer.classList.add(productImage(products));

  function productImage(products) {
    switch (products) {
      case "Chips":
        return "chipsImage";
      case "Soda":
        return "sodaImage";
      case "Candy":
        return "candyImage";
      case "Milk":
        return "milkImage";
      case "Tomatoes":
        return "tomatoesImage";
      default:
        return ""; 
    }
  }

});


/* Roll the dice game


const rollDiceButton = document.createElement("button");

 document.body.appendChild(rollDiceButton);

 rollDiceButton.innerHTML = "Roll the dice";


 const diceNumbers = [1, 2, 3, 4, 5, 6];
let randomNumber = Math.random(diceNumbers);

 const outputNumber = document.createElement("p");
  document.body.appendChild(outputNumber);

  let output = 0;

  outputNumber.innerHTML = "";

  
rollDiceButton.addEventListener("Click", () => {
  
  outputNumber.innerHTML = "he;"

})

*/





















