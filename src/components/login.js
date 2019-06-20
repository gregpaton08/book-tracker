import React from 'react'
import { login } from  '../database_connection'

export class Login extends React.Component {
  render() {
    return (
      <div>
        <button onClick={login}>Login with Google</button>
      </div>
    )
  }
}
