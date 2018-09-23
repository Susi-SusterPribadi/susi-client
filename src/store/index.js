import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import uploadImage from '../reducers/uploadImage.reducer'
import configTime from '../reducers/configTime.reducer'

const rootReducers = combineReducers({
  uploadImage,
  configTime
})

export default store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)