import { connect } from 'react-redux'
import { Dashboard } from '../components/dashboard'

const mapStateToProps = (state, props) => {
  return {
    userIsLoggedIn: state.auth.userIsLoggedIn
  }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
