import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemons = async () => {
  const request = axios.get(`${baseUrl}?limit=100000&offset=0`);
  const response = await request;

  return response.data.results;
};

export const getPokemon = async (name: string) => {
  const request = axios.get(`${baseUrl}/${name}`);
  const response = await request;

  return response.data;
};
