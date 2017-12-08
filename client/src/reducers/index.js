import { combineReducers } from 'redux'

import todos from './todoReducer.js'

export default combineReducers({
  todos,
})