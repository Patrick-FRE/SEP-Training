import { SEARCH_ALBUM, FETCH_ALBUM} from './types';
import axios from 'axios';



export const searchAlbums = text => dispatch => {
  dispatch({
    type: SEARCH_ALBUM,
    payload: text
  });
};

export const fetchAlbums = text => dispatch => {
  axios
    .get(`https://itunes.apple.com/search?term=${text}&media=music&entity=album&attribute=artistTerm&limit=50`)
    .then(response =>
      dispatch({
        type: FETCH_ALBUM,
        payload: response.response.json()
      })
    )
    .catch(err => console.log(err));
};



