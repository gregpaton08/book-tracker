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

export const fetchBooks = () =>
  (dispatch) => {
    // inform app the API call is starting
    readBooks()
    .then((books) => {
      const booksObject = {}
      books.forEach(book => booksObject[book.id] = book)
      dispatch(addBooks(booksObject))
    })
  }
