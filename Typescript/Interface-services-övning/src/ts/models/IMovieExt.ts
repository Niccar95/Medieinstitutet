import { IMovieSearch } from "./IMovieSearch";


export interface IMovieExt extends IMovieSearch{
  imdbID: string;
}
