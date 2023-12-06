import { get } from "./serviceBase"

export const finPlanetProperties = async () => {
  const getPlanetProperties = await get("https://swapi.dev/api/planets/?page=1");
  return getPlanetProperties.results;
}