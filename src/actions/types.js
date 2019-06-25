function createTypes() {
  const types = {}
  const addType = (type) => {
    types[type] = type
  }

  addType('ADD_BOOK')
  addType('ADD_BOOKS')
  addType('REQUEST_BOOKS')
  addType('REMOVE_BOOK')

  return types;
}

const types = createTypes()
export default types
