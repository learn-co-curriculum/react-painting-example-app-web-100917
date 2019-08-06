import { FETCH_PAINTINGS, DELETE_PAINTING } from './types'

export function fetchPaintings (artworks){
  return { 
    type: FETCH_PAINTINGS,
    artworks 
  }
}

export function deletePainting(id){
  return { 
    type: DELETE_PAINTING,
    id 
  }
}
