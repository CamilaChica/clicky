import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './containers/Game';
import HomePage from './containers/HomePage';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component
{
constructor(props)
{
  super(props);
  this.state={
    authenticated:false,
    email:""
  }
}

login=(user)=>{
  this.setState({authenticated:true,email:user.email})
}

render()
{
  return <Router>
  <Switch>
  {this.state.authenticated&&<Route path="/game" component={()=><Game email={this.state.email} />} />}
  <Route component={()=><HomePage onLogIn={this.login} authenticated={this.state.authenticated} />} />    
  </Switch>
</Router>;
}
}

export default App;
