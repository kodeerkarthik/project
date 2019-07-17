import React from 'react';
import Signup from './Components/Signup'
import Home from './Components/Home'
import About from './Components/About'
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path='/' component={Signup}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
