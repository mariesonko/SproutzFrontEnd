import React  from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { history } from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Playdates from './components/Playdates';
import PrivateCircle from './components/PrivateCircle';
import { Header } from 'semantic-ui-react'
import Events from './components/Events';
import Login from './modules/auth/Login';
import Signup from './modules/auth/Signup';


const App = (props) => {
    return (

      <Router history={history}>
      <div className='app'>
        <Header as='h1' color='violet' background='blue'>
           Sproutz
         </Header>
        <Navbar path={props.location}/>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/Profile' component={Profile} />
        <Route exact path='/Playdates' component={Playdates} />
        <Route exact path='/Events' component={Events} />
        <Route exact path='/MyCircle' component={PrivateCircle} />

      </div>
    </Router>
  );
}


export default App;
