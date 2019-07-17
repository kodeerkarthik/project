import React, { Component } from 'react';
import '../Css/Home.css';
import Logo from './Logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div className='home_body'>
                <Logo/>
                <div><Navbar/></div>
                <div className='row'>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 home_img">
                        <h3 className="onimagetext">By now Americans are accustomed to seeing advertisements for medical goods and services. 
                        The steady supply of direct-to-consumer TV advertisements by the pharmaceutical industry is probably 
                        the most high-profile example. But while much has been written about the negative effects of these 
                        advertisements, the impact of healthcare service advertising—by hospitals as well as by individual 
                        physicians—receives comparatively little attention and almost no debate.</h3>

                        <h3 className='onimagetext p_hide'>While advertising by doctors and hospitals has been legal for 30 years, until recently, professional 
                        taboos discouraged the practice. Increasing economic pressures and changing cultural norms have led, however, 
                        to the demise of these informal proscriptions, and advertisements produced by hospitals and individual 
                        providers are now common.

                        Yet arguments against healthcare-service advertising can be made on both ethical and economic grounds. 
                        While advocates of healthcare service advertising argue that the practice is harmless, often educational, 
                        and economically essential, several recent studies of healthcare service advertising reveal that medical 
                        centers and individual physicians often create advertisements that:</h3>
                        <button type="button" class="readmore btn btn-info">READ MORE</button>
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