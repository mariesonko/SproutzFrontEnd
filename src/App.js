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


    const loggedIn = !!this.props.current_family.id;
    return (

      <Router>
      <div className='app'>

        <Navbar currentUser={this.props.current_family}/>
          <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
        
        <Route exact path='/Register'
        render={(routerProps) => <Register {...routerProps} loggedIn={loggedIn}/>}/>

        <Route exact path='/Profile'
        render={(routerProps) => <Profile {...routerProps} loggedIn={loggedIn}/>}/>

        <Route exact path='/Welcome'
        render={(routerProps) => <Welcome {...routerProps} loggedIn={loggedIn}/>} />

        <Route exact path='/MyPlaydates'
        render={(routerProps) => <MyPlaydates {...routerProps} loggedIn={loggedIn}/>}/>

        <Route exact path='/CreatePlaydates'
        render={(routerProps) => <CreatePlaydates {...routerProps} loggedIn={loggedIn}/>} />

        <Route exact path='/Events'
        render={(routerProps) => <Events {...routerProps} loggedIn={loggedIn}/>}/>

        <Route  component={Home} />

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
