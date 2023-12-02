import './../scss/style.css'
import { searchPlanets } from './services/starWarsService';

const mainContainer = document.getElementById("app");


const handlingPlanetSearch = async () => {
  const planets = await searchPlanets();
console.log(planets);
}

handlingPlanetSearch();

