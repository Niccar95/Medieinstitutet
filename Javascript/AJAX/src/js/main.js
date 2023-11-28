import '/src/scss/style.scss'

class Movies {
  Title;
  Year;
  Poster;

  constructor(Title, Year, Poster) {
    this.Title = Title;
    this.Year = Year;
    this.Poster = Poster;
  }
}



fetch("http://www.omdbapi.com/?s=harry&apikey=b7ceda85")
  .then((response) => response.json())
  .then((data) => {

    //createHtml(data);

    const movieInfo = data.Search.map((movie) => {
      return new Movies(movie.Title, movie.Year, movie.Poster);
    });
    console.log(movieInfo);
    
  });

  /*const createHtml = (data) => {
    for (let i = 0; i < data.Search.length; i++) {
      console.log(data.Search[i].Title);
      
    const movieContainer = document.getElementById("app");
    const movieTitle = document.createElement("p");

    movieContainer.appendChild(movieTitle);
    movieTitle.innerHTML = data.Search[i].Title;
   
    data.Search.splice(8);

    const image = document.createElement("img");
    movieContainer.appendChild(image);

    image.src = data.Search[i].Poster;
    
    } 
    console.log(data);
  };

  */





  