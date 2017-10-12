import { POPULAR_DRIBBBLE_SHOTS, FIND_DRIBBBLE_BY_ID } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case POPULAR_DRIBBBLE_SHOTS:
      return [...state, ...action.payload.data]
    case FIND_DRIBBBLE_BY_ID:
      return [ ...state, Object.assign({}, action.payload.data)]
  }
  return state;
}
