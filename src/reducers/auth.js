import types from '../actions/types'

const INITIAL_STATE = {
  userIsLoggedIn: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_USER_LOGGED_IN:
      return {
        ...state,
        userIsLoggedIn: action.payload
      }
    default:
      return state
  }
}
