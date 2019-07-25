import { connect } from 'react-redux'
import { DeleteBookButton } from '../components/delete_book_button'
import { deleteBook } from '../actions/books'

const mapStateToProps = (state, props) => {
  return {

  }
}

const mapDispatchToProps = {
  deleteBook
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteBookButton)
