

import { IMovieResponse } from "../models/IMovieResponse";
import { IMovieSearch } from "../models/IMovieSearch";
import { IMovieExt } from "../models/IMovieExt";

import { get } from "./serviceBase";


export const searchForMovies = async (search: string): Promise<IMovieSearch[]> => {
  const url = "http://omdbapi.com?apikey=b7ceda85&s=" + search;
  const data = await get<IMovieResponse>(url);
  return data.Search;
};



export const getMovieById = async (title: string) => {
  const url = "http://omdbapi.com?apikey=416ed51a&s=" + title;

  const data = await get<IMovieExt>(url);
  return data;
};
