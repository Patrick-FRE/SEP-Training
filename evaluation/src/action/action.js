import {requestApi} from '../util';

export const fetchData = (data) => ({
    type: "FETCH_DATA",
    payload: {data}
});

export const handleChange = (artist) => ({
    type: "USER_INPUT",
    payload: {data: artist}
})

export const updateInput = (artist) => ({
    type: "UPDATE_INPUT",
    payload: {data: artist}
})

export const requestData = (artist) => (dispatch) => {
    dispatch(updateInput(artist));
    return requestApi(artist)
    .then( res => res.json()).then(res => {dispatch(fetchData(res))})
}