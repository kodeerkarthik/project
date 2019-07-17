import React, { Component } from 'react';
import '../Css/Navbar.css';
import logo from '../Images/logo.png'
class Navbar extends Component { 
    render() {

        return (
            <div className='nav_body'>
                <nav className='navnar'>
                    <div className='toggle'>
                    <i className="fa fa-bars" arial-hidden="true" ></i>
                    </div>
                    <ul className="unlist">
                        <li><h3 className='logo_name'>HEALTH+</h3><h6 className='logo_subname'>MULTISPECIALITY HOSPITAL</h6></li>
                        <li></li><li></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <span className="search_box">
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