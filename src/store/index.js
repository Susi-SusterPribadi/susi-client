import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import uploadImage from '../actions/uploadImage.action'

const rootReducers = combineReducers({
  uploadImage
})

export default store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)