import { connect } from 'react-redux'
import { BookDetail } from '../components/book_detail'

const mapStateToProps = (state, props) => {
  const params = new URLSearchParams(props.location.search)
  const bookId = params.get('id')
  const book = state.books.books ? state.books.books[bookId] : {}
  return {
    book
  }
}

const mapDispatchToProps = {

}

const BookDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail)

export default BookDetailContainer
