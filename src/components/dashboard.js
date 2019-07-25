import React from 'react'
import { Redirect } from 'react-router-dom'
import { logout } from  '../database_connection'
import { Link } from "react-router-dom"
import InProgress from '../containers/in_progress'
import BackLog from '../containers/back_log'

export class Dashboard extends React.Component {
  render() {
    if (!this.props.userIsLoggedIn) {
      return <Redirect to="/login" />
    }

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
        <BackLog />
      </div>
    )
  }
}
