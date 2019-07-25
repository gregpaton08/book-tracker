import { combineReducers } from 'redux'
import auth from './auth'
import books from './books'

const reducers = combineReducers({
  auth,
  books
})

export default reducers
