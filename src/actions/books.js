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
    .then((newBook) => dispatch(addBook(newBook)))

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

const setBook = (bookId, bookInfo) => ({
  type: types.UPDATE_BOOK,
  payload: {
    ...bookInfo,
    id: bookId
  }
})

export const updateBook = (bookId, fieldsToUpdate) =>
  (dispatch, getState) => {
    updateBookInDataBase(bookId, fieldsToUpdate)
    .then(() => {
      dispatch(setBook(bookId, fieldsToUpdate))
    })
  }

export const updateBookStatus = (bookId, status) =>
  (dispatch, getState) => {
    const completedOn = status === 'read' ? new Date() : null
    updateBookInDataBase(bookId, { status, completedOn })
    .then(() => {
      // TODO: update the book's status in REDUX
      const convertedCompletedOn = completedOn ?
        { seconds: completedOn.valueOf() / 1000 } :
        null
      dispatch(setBook(bookId, { status, completedOn: convertedCompletedOn }))
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
