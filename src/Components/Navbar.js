import React, { Component } from 'react';
// import Home from './Home'
// import About from './About'
// import News from './News'
// import Service from './Service'
// import Contact from './Contact'
import '../Css/Navbar.css';
import browserHistory from '../Utils/browserHistory';
// import logo1 from '../Images/logo1.png'
class Navbar extends Component { 

componentDidMount(){
    
}
                    
                    
          
    logout=()=> {
        browserHistory.push('/');
        sessionStorage.setItem("authentication", "");
        sessionStorage.setItem("userEmail", "");
    }
    render() {
        return (
            <div className='nav_body'>
                <nav className='navnar'>
                    <div className='toggle'>
                        <i className="fa fa-bars" arial-hidden="true" ></i>
                    </div>
                    <ul className="unlist row">
                        <li className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            {/* <img src={logo1} alt={"logo"} className='logo1'></img> */}
                            <h3 className='logo_name1'>HEALTH+</h3>
                        </li>
                        <li className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></li>
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href='Home'>Home</a></li>
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href='About'>About Us</a></li>
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="Service">Services</a></li>
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="News">News</a></li>
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="Contact">Contact Us</a></li>
                        <li className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></li>
                        <span className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                            <div className='search_box'>
                            <input className='search_txt' type="text" placeholder='Type to search'></input>
                            <a className="search_btn" href="#"><i className="fa fa-search"></i></a>
                            </div>
                        </span>
                        <li className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "><button onClick={this.logout} className="logout">Logout</button></li>
                    </ul>
                </nav>
                
            </div>
        );
    }
}

export default Navbar;


