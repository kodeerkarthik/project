import React, { Component } from 'react';
import '../Css/Navbar.css';
import logo1 from '../Images/logo1.png'
class Navbar extends Component { 
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
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="#">Home</a></li>
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="#">About Us</a></li>
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="#">Services</a></li>
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="#">News</a></li>
                        <li className='col-xs-1 col-sm-1 col-md-1 col-lg-1 itms'><a href="#">Contact Us</a></li>
                        <li className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></li>
                        <span className="col-xs-3 col-sm-3 col-md-3 col-lg-3 search_box">
                            <input className='search_txt' type="text" placeholder='Type to search'></input>
                            <a className="search_btn" href="#"><i className="fa fa-search"></i></a>
                        </span>
                    </ul>
                </nav>
                {/* <script src='https://code.jquery.com/jquery-3.2.1.js'></script>
                <script type="text/javascript">
                    $(document).ready(function(){
                        $('.unlist').toggleClass('active')
                    }) 
                    
                </script> */}
            </div>
        );
    }
}

export default Navbar;


