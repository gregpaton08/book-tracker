import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import '../style/book_list.css'

export class BookList extends React.Component {
  componentDidMount() {
    // TODO: move this to container? YES
    if (!this.props.books || this.props.books.length === 0) {
      this.props.fetchBooks()
    }
  }

  render() {
    if (!this.props.books) {
      return <div></div>
    }
    
    return (
      <table className='book-list'>
        <tbody>
          {this.props.books.map((book, index) => (
            <tr key={`${index}${book.title}`}>
              <Link to={`/book?id=${book.id}`}>
                <td>{book.title}</td>
              </Link>
              <td>
                <button
                  style={{ backgroundColor: 'Transparent', border: 'none' }}
                  onClick={() => this.props.deleteBook(book.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

BookList.propTypes = {
  // TODO: figure this shit out
  books: PropTypes.arrayOf(PropTypes.shape({

  })),
  deleteBook: PropTypes.func.isRequired
}
