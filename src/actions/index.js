import { FETCH_PAINTINGS, DELETE_PAINTING } from './types'
import artworks from '../components/artworks'

export function fetchPaintings(artworks){
  return {
    type: FETCH_PAINTINGS,
    artworks
  }
}

export function thunkFetchPaintings(loginData){

  return function (dispatch) {
    dispatch({type: "START_FETCH"})
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        dispatch({type: 'FETCH_PAINTINGS_SUCCESS', artworks: artworks})
      })
  };
}

export function deletePainting(id){
  return {
    type: DELETE_PAINTING,
    id 
  }
}
