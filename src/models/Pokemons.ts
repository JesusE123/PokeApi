export interface PokemonResponse {
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
interface Sprites {  
  other: {
    dream_world : {
      front_default : string
    }
  }
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface urlResponse {
  name: string;
  url: string;
}




  
  
  
  
  
  
  
