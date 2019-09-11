import React from 'react'
import { connect } from 'react-redux'
import { PrivateRoute } from '../components/private_route'
import { checkIfUserLoggedIn } from '../actions'

const mapStateToProps = (state, props) => {
  return {
    userIsLoggedIn: state.auth.userIsLoggedIn
  }
}

const mapDispatchToProps = {
  checkIfUserLoggedIn
}

class PrivateRouteContainer extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     didCheckAuth: false
  //   }
  // }

  // componentDidMount() {
  //   if (!this.props.isAuthorized && !this.state.didCheckAuth) {
  //     this.props.checkIfUserLoggedIn()
  //     .then(() => this.setState({ ...this.state, didCheckAuth: true }))
  //   }
  // }

  render() {
    console.log('PrivateRouteContainer render', this.props)
    if (this.props.userIsLoggedIn === null) {
      return <div>Loading...</div>
    }

    return (
      <PrivateRoute {...this.props} />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRouteContainer)
