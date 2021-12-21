import { POKES_SET } from '../constants';

const initialState = [];

const pokesReducer = (state = initialState, action) => {
   switch (action.type) {
      case POKES_SET:
         return {
            ...state,
            allPokes: action.payload.slice()
         }
      default:
         return state;
   }
}

export default pokesReducer;