import React, { Component } from 'react';
import '../Css/Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className='footer_body'>
                <div className='row'>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <h2>About us</h2><br/>
                            <p className='foot_p'>About us</p>
                            <p className='foot_p'>Blog</p>
                            <p className='foot_p'>News</p>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className='foot_search_box'>
                                <input type='text' className='foot_search'></input>
                                <a className="foot_search_btn" href="#"><i className="fa fa-search"></i></a>
                            </div>
                            <div className='s-m'>
                                <p className='copyright'>Copyright@2019</p><hr/>
                                <a href='#'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                                <a href='#'><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                                <a href='#'><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                                <a href='#'><i class="fa fa-youtube-square" aria-hidden="true"></i></a>
                                <a href='#'><i class="fa fa-snapchat-square" aria-hidden="true"></i></a>
                                <a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <h3>Contact Us</h3><br/>
                            <p className='foot_p'>healthplus@kennalu.nic</p>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    </div>









{/* 
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <div className='row'>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h2>Company</h2><br/>
                                <p className='foot_p'>About us</p>
                                <p className='foot_p'>Blog</p>
                                <p className='foot_p'>News</p>
                            </div>
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3>Contact Us</h3><br/>
                                <p className='foot_p'>healthplus@kennalu.nic</p>
                            </div>
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                <div className='foot_search_box'>
                                    <input type='text' className='foot_search'></input>
                                    <a className="foot_search_btn" href="#"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                    */}
                {/* </div> */}
                {/* <div className='s-m'>
                    <p className='copyright'>Copyright@2019</p><hr/>
                    <a href='#'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-youtube-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-snapchat-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-telegram" aria-hidden="true"></i></a>    
                </div> */}
            </div>
        );
    }
}

export default Footer;