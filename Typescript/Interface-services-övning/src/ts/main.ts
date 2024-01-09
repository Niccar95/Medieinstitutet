import '../scss/style.scss'
import { searchForMovies } from './services/service';

document.getElementById("submitForm")?.addEventListener("submit", async (e) => {

  e.preventDefault();

  const search = (document.getElementById("search") as HTMLInputElement).value;

  const foundMovies = await searchForMovies(search);

  console.log(foundMovies);


});






