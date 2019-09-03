import types from '../actions/types'

const INITIAL_STATE = {
  isFetching: false,
  searchTerm: '',
  books: {}
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
    case types.UPDATE_BOOK:
      const bookToUpdate = action.payload
      return {
        ...state,
        books: {
          ...(state.books ? state.books : {}),
          [bookToUpdate.id]: {
            ...state.books[bookToUpdate.id],
            ...bookToUpdate
          }
        }
      }
    case types.REQUEST_BOOKS:
      return {
        ...state,
        isFetching: true
      }
    case types.REMOVE_BOOK:
      const { [action.payload]: value, ...books } = state.books
      return {
        ...state,
        books
      }
    case types.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state
  }
}
