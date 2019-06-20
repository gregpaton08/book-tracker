function createTypes() {
  const types = {}
  const addType = (type) => {
    types[type] = type
  }

  addType('ADD_BOOK')
  addType('ADD_BOOKS')

  return types;
}

const types = createTypes()
export default types
