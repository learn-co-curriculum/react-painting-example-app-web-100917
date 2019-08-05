export default function paintings(state = [], action) {
  switch (action.type) {
    case 'FETCH_PAINTINGS':
      return state.concat([...action.artworks])
    case 'DELETE_PAINTING':
      const newState = state.filter(art => action.id != art.id)
      return [...newState]
    default:
      return state
  }
}
