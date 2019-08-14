import React from 'react';
import Signup from './Components/Signup'
import Home from './Components/Home'
import About from './Components/About'
import News from './Components/News'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Title from './Components/Title'
import Demo from './Components/Demo'
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import './App.css';
import {BrowserRouter as Router,Redirect, Route, Switch,} from 'react-router-dom';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => (  
    (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
      <Redirect to={{pathname: '/', state: { from: props.location }, }}/>)
  )}
/>
);


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Signup}></Route>
          {/* <Route exact path='/demo' component={Demo}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/service' component={Service}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/news' component={News}></Route> 
          <Route exact path='/title' component={Title}></Route>
          <Route exact path='/contact' component={Contact}></Route> */}

          <PrivateRoute exact path='/demo' component={Demo}></PrivateRoute>
          <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
          <PrivateRoute exact path='/service' component={Service}></PrivateRoute>
          <PrivateRoute exact path='/about' component={About}></PrivateRoute>
          <PrivateRoute exact path='/news' component={News}></PrivateRoute> 
          <PrivateRoute exact path='/title' component={Title}></PrivateRoute>
          <PrivateRoute exact path='/contact' component={Contact}></PrivateRoute>
        </Switch>
      </Router>    
    </div>
  );
}
export default App;
