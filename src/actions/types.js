function createTypes() {
  const types = {}
  const addType = (type) => {
    types[type] = type
  }

  addType('SET_USER_LOGGED_IN')
  addType('SET_CURRENT_USER')

  addType('ADD_BOOK')
  addType('ADD_BOOKS')
  addType('UPDATE_BOOK')
  addType('REQUEST_BOOKS')
  addType('REMOVE_BOOK')

  addType('SET_SEARCH_TERM')

  return types
}

const types = createTypes()
export default types
