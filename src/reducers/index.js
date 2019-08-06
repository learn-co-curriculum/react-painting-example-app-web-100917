import { combineReducers } from 'redux'
import paintings from './paintings'
import showPainting from './showPainting'

export default combineReducers({
  paintings: paintings,
  showPainting: showPainting
})
