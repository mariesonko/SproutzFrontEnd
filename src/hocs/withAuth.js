import React from 'react'
import { Redirect } from 'react-router-dom'

const withAuth = (MyWrappedComponent) => {
  return class WrappedComponent extends React.Component {
    render () {
      return (
        this.props.loggedIn ? <MyWrappedComponent {...this.props} info='info' />
        : <Redirect to='/login' />
      )
    }
  }
}

export default withAuth;
