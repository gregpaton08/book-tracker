import { connect } from 'react-redux'
import { MainHeader } from '../components/header'

const mapStateToProps = (state, props) => {
  return {
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeader)
