import { FETCH_PAINTINGS, DELETE_PAINTING } from '../actions/types'
export default function paintings(state = [], action) {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return state.concat([...action.artworks])
    case DELETE_PAINTING:
      const newState = state.filter(artObj => artObj.id != action.id )
      return [...newState]
    default:
      return state
  }
}
