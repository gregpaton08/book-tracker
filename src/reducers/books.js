import types from '../actions/types'

const INITIAL_STATE = {
  isFetching: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_BOOK:
      const book = action.payload
      return {
        ...state,
        books: {
          ...(state.books ? state.books : {}),
          [book.id]: book
        }
      }
    case types.ADD_BOOKS:
      return {
        ...state,
        books: {
          ...(state.books ? state.books : {}),
          ...action.payload
        },
        isFetching: true
      }
    case types.REQUEST_BOOKS:
      return {
        ...state,
        isFetching: true
      }
    default:
      return state
  }
}
