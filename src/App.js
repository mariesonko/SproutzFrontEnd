import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
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

class App extends React.Component{

      constructor() {
        super()
        this.state = {
                auth: {
                  currentFamily: {}
                      }
                }
        }


      componentDidMount () {
        const token = localStorage.getItem('token')
        if (token) {
          const options =   {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': token
            }
          }
          fetch('http://localhost:3001/api/v1/reauth', options)
          .then(resp => resp.json())
          .then(family => {
            this.setState({
                auth: {
                  currentFamily: family
                }
              })

            })
        }
      }

      handleLogin = (family) => {
        this.setState({
            auth: {
              currentFamily: family
            }
          })
        localStorage.setItem('token', family.jwt)
      }

      handleLogout = () => {
        this.setState({
          auth: {
            currentFamily: {}
          }
        })
        localStorage.clear()
      }

  render(){
    console.log(this.props);

    const loggedIn = !!this.state.auth.currentFamily.id
    return (

      <Router>
      <div className='app'>
         {/* <Header as='h1' color='violet' block>
           Sproutz
         </Header> */}
        <Navbar path={this.props.location}
          currentFamily={this.state.auth.currentFamily}
            onLogout={this.handleLogout}/>
        <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Profile' component={Profile} />
        <Route exact path='/MyPlaydates' component={MyPlaydates} />
        <Route exact path='/CreatePlaydates' component={CreatePlaydates} />
        <Route exact path='/Events' component={Events} />
        <Route exact path='/MyCircle' component={MyPlaydates} />

      </div>
    </Router>

  );
}
}

export default App;
