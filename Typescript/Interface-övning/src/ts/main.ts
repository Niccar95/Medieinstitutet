import { finPlanetProperties } from "./services/service";
import "/src/scss/style.scss"


const planetInfo = await finPlanetProperties();

const planetCard = document.getElementById("planetCard");


function createHtml () {

  for (let i = 0; i < planetInfo.length; i++) {

    
    const planetListItem = document.createElement("li");
    planetCard?.appendChild(planetListItem);

    const planetName = document.createElement("h2");
    planetName.innerHTML = planetInfo[i].name;
    planetListItem.appendChild(planetName);

    const planetDiameter = document.createElement("p");
    planetDiameter.innerHTML = planetInfo[i].diameter;
    planetListItem.appendChild(planetDiameter);

    const planetClimate = document.createElement("p");
    planetClimate.innerHTML = planetInfo[i].climate;
    planetListItem.appendChild(planetClimate); 
  }

};

createHtml();

