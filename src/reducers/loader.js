export default function loader(state = false, action) {
  switch (action.type) {
    case 'START_FETCH':
      return true
    case 'FETCH_PAINTINGS_SUCCESS':
      return false
    default:
      return state
  }
}
