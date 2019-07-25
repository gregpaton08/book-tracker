import types from './types'
import { isUserLoggedIn } from '../database_connection'

export const checkIfUserLoggedIn = () => 
  (dispatch, getState) => 
    dispatch(setUserLoggedIn(isUserLoggedIn()))

export const setUserLoggedIn = (isUserLoggedIn) => ({
  type: types.SET_USER_LOGGED_IN,
  payload: isUserLoggedIn
})
