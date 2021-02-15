import { createStore } from 'redux'

let initialState = {
	albums: [],
}

const SEARCH_ALBUMS = 'SEARCH_ALBUMS'

//action type
const actionTypes = {
	SEARCH_ALBUMS,
}
//action creater
const searchAlbums = (albums, singer) => {
	return {
		singer: singer,
		albums: albums,
		type: actionTypes.SEARCH_ALBUMS,
	}
}

export const actionCreater = {
	searchAlbums,
}

function AlbumReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SEARCH_ALBUMS:
			return {
				singer: action.singer,
				albums: [...action.albums],
			}
		default:
			return state
	}
}

export const store = createStore(AlbumReducer)

store.subscribe(() => console.log(store.getState()))
