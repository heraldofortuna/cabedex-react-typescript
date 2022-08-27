import axios, { AxiosResponse } from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemonsData = async () => {
  const request = axios.get(`${baseUrl}?limit=100000&offset=0`);
  const response = await request;

  return response.data.results;
};

export const getPokemonData = async (name: string) => {
  return await axios
    .get(`${baseUrl}/${name}/`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: any) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("Error:", error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        return error.response.status;
      } else if (error.request) {
        // The request was made but no response was received `error.request`
        // is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log("Error:", error.request);
        return error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error:", error.message);
      }
      // console.log(error.config);
    });
};

// export const getPokemonData = async (name: string) => {
//   const request = axios.get(`${baseUrl}/${name}/`);
//   const response = await request;

//   return response.data;
// };

export const getPokemonLocationsData = async (id: number) => {
  const request = axios.get(`${baseUrl}/${id}/encounters`);
  const response = await request;

  return response.data;
};
