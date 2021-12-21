import { POKEMON_SET, POKES_SET } from '../constants';

export function setPokemon(poke) {
   return {
      type: POKEMON_SET,
      payload: poke
   }
}

export function setAllPokes(pokes) {
   return {
      type: POKES_SET,
      payload: pokes
   }
}





