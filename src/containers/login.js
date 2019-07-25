import { connect } from 'react-redux'
import { Login } from '../components/login'
import { checkIfUserLoggedIn } from '../actions'

const mapStateToProps = (state, props) => {
  return {
    userIsLoggedIn: state.auth.userIsLoggedIn
  }
}

const mapDispatchToProps = {
  checkIfUserLoggedIn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
