import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Playdates from './components/Playdates';
import Events from './components/Events';
import Login from './modules/auth/Login';
import Signup from './modules/auth/Signup';



const App = (props) => {
    return (
      <Router>
      <div className='app'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/Profile' component={Profile} />
        <Route exact path='/Playdates' component={Playdates} />
        <Route exact path='/Events' component={Events} />
      </div>
    </Router>
  );
}

export default App;
