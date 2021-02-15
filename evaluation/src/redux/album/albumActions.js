import axios from 'axios'
import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE
} from './albumTypes'

export const fetchAlbums = (artistName) => {
  return (dispatch) => {
    dispatch(fetchAlbumRequest())
    axios
      .get(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=50`)
      .then(response => {
        dispatch(fetchAlbumsSuccess(response.data.results))

      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchAlbumsFailure(error.message))
      })
  }
}

export const fetchAlbumRequest = () => {
  return {
    type: FETCH_ALBUM_REQUEST
  }
}

export const fetchAlbumsSuccess = albums => {
  return {
    type: FETCH_ALBUM_SUCCESS,
    payload: albums
  }
}

export const fetchAlbumsFailure = error => {
  return {
    type: FETCH_ALBUM_FAILURE,
    payload: error
  }
}
