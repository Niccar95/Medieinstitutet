import axios from "axios";
import { IStarWarsresponse } from "../models/IStarWarsresponse";


export const get = async(url: string): Promise<IStarWarsresponse> => {
  const response = await axios.get<IStarWarsresponse>(url);
  return response.data;
};