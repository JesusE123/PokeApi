export type PokemonResponse = {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    
    };
    height: number;
    base_experience: number;
    weight: number;
    types: { type: PokemonType }[];
  };

  export type PokemonType = {
    name: string;
    url: string;
  };

  export type Pokemon = {
    url:string
    types: string[]
    name:string
    height: number;
    experience: number;
    weight: number;
    sprites: {
      front_default: string;
    
    };
  }
  