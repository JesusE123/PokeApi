import axios from "axios";
import { PokemonResponse } from '@/models/Pokemons';
import { PokemonRequest, PokemonDetailRequest } from '@/models/PokemonsRequest';

const baseUrl = 'https://pokeapi.co/api/v2';

export const getAllPokemons = async (req: PokemonRequest = { limit: 20, offset: 0 }) => {
  const url = `${baseUrl}/pokemon?limit=${req.limit}&offset=${req.offset}`;

  const response = await axios.get(url, { signal: req.signal });
  
  return response.data;
};

export const getPokemonDetail = async (req: PokemonDetailRequest) => {
  const response = await axios.get(req.url, { signal: req.signal });
  return response.data;
};

export const getPokemonByName = async (req: { signal?: AbortSignal, query?: string, type?:string }) => {
  const urlQuery = `${baseUrl}/pokemon/${req.query}/`;
  const response = await axios.get(urlQuery, { signal: req.signal });
  return response.data;
};



export const getAllDataPokemons = async (req: PokemonRequest = { limit: 20, offset: 0 }) => {
  if (req.query) {
    const result = await getPokemonByName({ query: req.query, signal: req.signal});
    return { count: 1, data: [result]};
  }

  

  const result = await getAllPokemons(req);
  const promises = result.results.map((element: PokemonResponse) => {
    return getPokemonDetail({ url: element.url, signal: req.signal });
  });

  return { count: result.count, data: await Promise.all(promises) };
};
