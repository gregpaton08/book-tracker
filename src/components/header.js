import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from  '../database_connection'
import PropTypes from 'prop-types'

const MainHeaderItem = (props) => (
  <div className='main-header-item'>
    {props.children}
  </div>
)

export class MainHeader extends React.Component {
  render() {
    if (!this.props.currentUser) {
      return <div></div>
    }
    console.log('MainHeader render', this.props)
    return (
      <header className='main-header'>
        <div className='main-header-left'>
          <MainHeaderItem>
            <Link to='/add_book'>Add Book</Link>
          </MainHeaderItem>
        </div>
        <div className='main-header-right'>
          <MainHeaderItem>
            <Link
              onClick={logout}
              to='/login'
            >
              Logout
            </Link>
          </MainHeaderItem>
          <MainHeaderItem>
            {this.props.currentUser.displayName}
          </MainHeaderItem>
        </div>
      </header>
    )
  }
}

MainHeader.propTypes = {
  currentUser: PropTypes.object
}
