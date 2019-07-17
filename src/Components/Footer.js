import React, { Component } from 'react';
import '../Css/Footer.css'
class Footer extends Component {
    render() {
        return (
            <div className='footer_body'>
                <div className='s-m'>
                    <p className='copyright'>Copyright@2019</p><hr/>
                    <a href='#'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-youtube-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-snapchat-square" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href='#'><i class="fa fa-telegram" aria-hidden="true"></i></a>    
                </div>
            </div>
        );
    }
}

export default Footer;