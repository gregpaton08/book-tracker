import types from './types'
import {
  readBooks as readBooksFromDatabase,
  addBook as addBookToDataBase,
  deleteBook as deleteBookFromDataBase,
  updateBook as updateBookInDataBase
} from '../database_connection'

////////////////////////////////////////
// CREATE
////////////////////////////////////////

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


////////////////////////////////////////
// READ
////////////////////////////////////////

export const requestBooks = () => ({
  type: types.REQUEST_BOOKS
})

export const fetchBooks = () =>
  (dispatch, getState) => {
    if (getState().books.isFetching) {
      return Promise.resolve()
    }
    dispatch(requestBooks())
    readBooksFromDatabase()
    .then((books) => {
      const booksObject = {}
      books.forEach(book => booksObject[book.id] = book)
      dispatch(addBooks(booksObject))
    })
  }


////////////////////////////////////////
// UPDATE
////////////////////////////////////////

export const updateBookStatus = (bookId, status) =>
  (dispatch, getState) => {
    updateBookInDataBase(bookId, { status })
    .then(() => {
      // TODO: update the book's status in REDUX
    })
  }


////////////////////////////////////////
// DELETE
////////////////////////////////////////

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

export const setSearchTerm = (searchTerm) => ({
  type: types.SET_SEARCH_TERM,
  payload: searchTerm
})
