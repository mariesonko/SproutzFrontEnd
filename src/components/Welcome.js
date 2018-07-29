import React from 'react';
import withAuth from '../hocs/withAuth'

class Welcome extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div id='welcome'>
          <h1> Welcome to the Home Page </h1>
      </div>
    );
  }
}

export default withAuth(Welcome)
