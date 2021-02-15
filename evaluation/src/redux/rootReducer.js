import { combineReducers } from 'redux'
import albumReducer from './album/albumReducer'
import searchReducer from './search/searchRedux'

const rootReducer = combineReducers({
  album: albumReducer,
  search:searchReducer
})

export default rootReducer
