import React from 'react'
import PropTypes from 'prop-types'
import { FaTrashAlt } from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import '../style/book_list.css'

export class BookList extends React.Component {
  componentDidMount() {
    // TODO: move this to container?
    if (!this.props.books) {
      this.props.fetchBooks()
    }
  }

  render() {
    if (!this.props.books) {
      return <div></div>
    }
    
    return (
      <table>
        <tbody>
          {Object.values(this.props.books).map((book, index) => (
            <tr key={`${index}${book.title}`}>
              <td>{book.title}</td>
              <td><button style={{ backgroundColor: 'Transparent', border: 'none' }}><FaTrashAlt /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

BookList.propTypes = {
  // TODO: figure this shit out
  books: PropTypes.shape({
    id: PropTypes.shape({

    })
  })
}
