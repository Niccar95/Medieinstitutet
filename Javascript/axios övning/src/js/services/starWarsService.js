import { get } from "./starWarsBase";


export const searchPlanets = async() => {
  const searchPlanetName = await get("https://swapi.dev/api/planets/");
  return searchPlanetName.results;
}