import React  from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router  } from 'react-router-dom';
import Navbar from './components/CustomNavBar';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/Profile';
import CreatePlaydates from './components/CreatePlaydates';
import MyPlaydates from './components/MyPlaydates';
import { Header } from 'semantic-ui-react'
import Events from './components/Events';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import { connect } from 'react-redux';


class App extends React.Component{

  render(){


    const loggedIn = !!this.props.current_family.id
    console.log(loggedIn);
    return (

      <Router>
      <div className='app'>

        <Navbar currentUser={this.props.current_family}
          onLogout={this.handleLogout}/>
          <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Profile' component={Profile} />

        <Route exact path='/Welcome'
        render={(routerProps) => <Welcome {...routerProps} loggedIn={loggedIn}/>} />
        <Route exact path='/MyPlaydates' component={MyPlaydates}/>
        <Route exact path='/CreatePlaydates' component={CreatePlaydates} />
        {/* <Route exact path='/WhatsHot' component={WhatsHot} /> */}
        <Route exact path='/Events' component={Events} />
        <Route exact path='/MyCircle' component={MyPlaydates} />
        </Switch>
      </div>
    </Router>

  );
}
}
const mapStateToProps = (state) => {
  return { current_family: state.auth.current_family }
}

export default connect(mapStateToProps )(App);
