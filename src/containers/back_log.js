import { connect } from 'react-redux'
import { BackLog } from '../components/back_log'
import { setSearchTerm } from '../actions/books'

const mapStateToProps = (state, props) => {
  return {
    searchTerm: state.books.searchTerm
  }
}

const mapDispatchToProps = {
  setSearchTerm
}

const BackLogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackLog)

export default BackLogContainer
