import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
  
})

export default store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)