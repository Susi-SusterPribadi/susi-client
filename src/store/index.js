import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import uploadImage from '../reducers/uploadImage.reducer'
import configTime from '../reducers/configTime.reducer'
import getDataTime from '../reducers/getDataTime.reducer'

const rootReducers = combineReducers({
  uploadImage,
  configTime,
  getDataTime
})

export default store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)