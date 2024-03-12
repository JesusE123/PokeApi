export type PokemonResponse = {
  id: number;
  name: string;
  sprites: Sprites;
  height: number;
  base_experience: number;
  weight: number;
  types: PokemonType[]
  abilities: []
  
  other:Sprites
  url:string
}
export type Sprites =  {  
  other: {
    dream_world : {
      front_default : string
    }
  }
}

export type PokemonType =  {
  type: {
    name: string;
  };
}

export type PokemonAbility =  {
  ability: {
    name: string;
  };
}

export type urlResponse = {
  name: string;
  url: string;
}




  
  
  
  
  
  
  
