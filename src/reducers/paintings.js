export default function paintings(state = [], action) {
  switch (action.type) {
    case 'FETCH_PAINTINGS_SUCCESS':
      return state.concat([...action.artworks])
    case 'LOADING':
      console.log('got to loading reducer case')
      return state
    case 'DELETE_PAINTING':
      const newState = state.filter(art => action.id != art.id)
      return [...newState]
    default:
      return state
  }
}
