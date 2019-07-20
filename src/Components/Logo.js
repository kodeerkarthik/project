import React, { Component } from 'react';
import logo from '../Images/logo.png'
// import Title from './Title';

class Logo extends Component {
    render() {
        return (
            <div>
                <div className='head '>
                    <div className='row'>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <img src={logo} alt={"logo"} className='logo'></img>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h3 className='logo_name'>HEALTH+</h3><p className='logo_subname'>MULTISPECIALITY <br/>HOSPITAL</p>
                            </div>
                        </div>
                        
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9"></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Logo;