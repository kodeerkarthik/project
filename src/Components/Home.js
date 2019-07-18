import React, { Component } from 'react';
import '../Css/Home.css';
import Logo from './Logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Footer from './Footer';
import doc from '../Images/doc.jpeg'

class Home extends Component {
    render() {
        return (
            <div className='home_body'>
                <Logo/>
                <div><Navbar/></div>
                <div className='row'>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 home_img row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h3 className="onimagetext">By now Americans are accustomed to seeing advertisements for medical goods and services. 
                                The steady supply of direct-to-consumer TV advertisements 
                            </h3>
                            <h3 className='onimagetext p_hide'>While advertising by doctors and hospitals has been legal for 30 years, until recently, professional 
                                taboos discouraged the practice. Increasing economic pressures and changing cultural norms have led, however, 
                                to the demise of these informal proscriptions, and advertisements produced by hospitals and individual 
                                providers are now common.</h3>
                            <button type="button" class="readmore btn btn-info">READ MORE</button>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <img src={doc} alt={"doc"} className='homeimg'></img>
                        </div>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
                <div ><Slideshow/></div>
                <div><Footer/></div>
            </div>
        );
    }
}

export default Home;