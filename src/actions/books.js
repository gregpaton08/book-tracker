import types from './types'

export const addBook = (book) => ({
  type: types.ADD_BOOK,
  payload: book
})

export const addBooks = (books) => ({
  type: types.ADD_BOOK,
  payload: books
})
