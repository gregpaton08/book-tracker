import types from './types'
import { readBooks, addBook as addBookToDataBase, deleteBook as deleteBookFromDataBase } from '../database_connection'

export const addBook = (book) => ({
  type: types.ADD_BOOK,
  payload: book
})

export const addNewBook = (book) =>
  (dispatch, getState) =>
    addBookToDataBase(book.title, book.author)
    .then(() => dispatch(addBook(book)))

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

export const removeBook = (bookId) => ({
  type: types.REMOVE_BOOK,
  payload: bookId
})

export const deleteBook = (bookId) =>
  (dispatch, getState) => {
    deleteBookFromDataBase(bookId)
    .then(() => {
      dispatch(removeBook(bookId))
    })
  }
