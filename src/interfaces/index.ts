export interface PokemonsInterface {
  name: string;
  url: string;
}

export interface PokemonInterface {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
