import React from 'react'
import { logout } from  '../database_connection'
import { Link } from "react-router-dom"
import BookList from '../containers/book_list'
import InProgress from '../containers/in_progress'

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Link to='/add_book'>Add Book</Link>
        <Link
          onClick={logout}
          to='/login'
        >
          Logout
        </Link>
        <InProgress />
        <BookList/>
      </div>
    )
  }
}
