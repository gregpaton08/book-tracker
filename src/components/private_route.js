import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export class PrivateRoute extends React.Component {
  render() {
    const { component: Component, userIsLoggedIn, ...remainingProps } = this.props
    return (
      <Route
        {...remainingProps}
        render={(props) => userIsLoggedIn ?
          <Component {...this.props} /> :
          <Redirect to={{pathname: '/login', state: {from: this.props.location}}} />
        }
      />
    )
  }
}
