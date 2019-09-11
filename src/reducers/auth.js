import types from '../actions/types'

const INITIAL_STATE = {
  userIsLoggedIn: null,
  currentUser: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_USER_LOGGED_IN:
      return {
        ...state,
        userIsLoggedIn: action.payload
      }
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}
