import React  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import CreatePlaydates from './components/CreatePlaydates';
import MyPlaydates from './components/MyPlaydates';
import { Header } from 'semantic-ui-react'
import Events from './components/Events';
import Login from './modules/auth/Login';
import Signup from './components/Signup';


class App extends React.Component{
  render(){
    return (
      <Router>
      <div className='app'>
        <Header as='h1' color='violet' background='blue'>
           Sproutz
         </Header>
        <Navbar path={this.props.location}/>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/Profile' component={Profile} />
        <Route exact path='/CreatePlaydates' component={CreatePlaydates} />
        <Route exact path='/Events' component={Events} />
        <Route exact path='/MyCircle' component={MyPlaydates} />

      </div>
    </Router>
  );
}
}

export default App;
