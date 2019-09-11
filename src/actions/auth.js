import types from './types'
import { isUserLoggedIn } from '../database_connection'

export const checkIfUserLoggedIn = () => 
  (dispatch, getState) => {
    console.log('checkIfUser', isUserLoggedIn(), getState().auth)
    dispatch(setUserLoggedIn(isUserLoggedIn()))
    return Promise.resolve()
  }

export const setUserLoggedIn = (isUserLoggedIn) => ({
  type: types.SET_USER_LOGGED_IN,
  payload: isUserLoggedIn
})

export const setCurrentUser = (currentUser) => ({
  type: types.SET_CURRENT_USER,
  payload: currentUser
})
