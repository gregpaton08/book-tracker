import types from './types'
import { readBooks } from '../database_connection'

export const addBook = (book) => ({
  type: types.ADD_BOOK,
  payload: book
})

export const addBooks = (books) => ({
  type: types.ADD_BOOKS,
  payload: books
})

export const requestBooks = () => ({
  type: types.REQUEST_BOOKS
})

export const fetchBooks = () =>
  (dispatch, getState) => {
    if (getState().books.isFetching) {
      return Promise.resolve()
    }
    dispatch(requestBooks())
    readBooks()
    .then((books) => {
      const booksObject = {}
      books.forEach(book => booksObject[book.id] = book)
      dispatch(addBooks(booksObject))
    })
  }
