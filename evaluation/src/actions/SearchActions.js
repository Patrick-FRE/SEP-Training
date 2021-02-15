import { SEARCH_SONG, FETCH_SONGS, LOADING } from './types';
import axios from 'axios';

export const searchSong = text => dispatch => {
  dispatch({
    type: SEARCH_SONG,
    payload: text
  });
};

export const fetchSongs = text => dispatch => {
  axios
    .get(`https://itunes.apple.com/search?term=${text}&media=music&entity=album&attribute=artistTerm&limit=50`)
    .then(response =>{
      console.log(response)
      dispatch({
        type: FETCH_SONGS,
        payload: response.data
      })}
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
    return {
      type: LOADING
    };
  };
