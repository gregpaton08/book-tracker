import React from 'react'
import { login } from '../database_connection'
import { Redirect } from 'react-router-dom'

export class Login extends React.Component {
  componentDidMount() {
    this.props.userIsLoggedIn === null && this.props.checkIfUserLoggedIn()
  }

  render() {
    if (this.props.userIsLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <button onClick={login}>Login with Google</button>
      </div>
    )
  }
}
