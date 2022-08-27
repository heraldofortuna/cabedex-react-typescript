export enum Status {
  Init = "init",
  Success = "success",
}

export enum Infomode {
  General = "general",
  Stats = "stats",
  Location = "location",
}

export interface PokemonsInterface {
  name: string;
  url: string;
}

export interface PokemonInterface {
  id: number;
  name: string;
  sprites?: {
    front_default: string;
  };
  stats?: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  height?: number;
  weight?: number;
  abilities?: { ability: { name: string }; is_hidden: boolean }[];
  types?: { type: { name: string } }[];
  forms?: { name: string }[];
}
