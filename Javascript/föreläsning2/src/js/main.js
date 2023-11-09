const drink = document.getElementById("juice");
drink.innerHTML = "Passionsfrukt";
const runningImg = document.getElementById("running");
//console.log(runningImg);

/*
runningImg.setAttribute("src", "/föreläsning2/img/vineyard-8345243_1280.jpg");

runningImg.setAttribute("alt", "running is fun");
*/


const container = document.getElementById("container");

const runTitle = document.createElement("h2"); //<h2></h2>

runTitle.innerHTML = "Spring!";

container.appendChild(runTitle);



const imgContainer = document.createAttribute.Element("div");

const img = document.createElement("img");

img.setAttribute("src", "/föreläsning2/img/vineyard-8345243_1280.jpg");

imgContainer.className = "image-container";

imgContainer.appendChild(img);
container.appendChild(imgContainer);