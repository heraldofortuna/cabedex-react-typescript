export enum Status {
  Init = "init",
  Success = "success",
}

export enum Infomode {
  General = "general",
  Stats = "stats",
  Location = "location",
}

export interface ButtonInterface {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface InputInterface {
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
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

export interface PokeLocationsInterface {
  id: number;
}

export interface PokeLocationInterface {
  location_area: {
    name: string;
    url: string;
  };
}
