import React, { Component } from 'react';
import '../Css/Contact.css';
import Logo from './Logo';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, CardText, CardBody,CardTitle} from 'reactstrap';


class Contact extends Component { 
    render() {
        return (
            <div className='contact_body'>
                <Logo/>
                <div><Navbar/></div>
                    <div className='row'>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pagebg">
                            <div className='home_name'>CONTACT US</div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    </div>

                    <div className='row'>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className='shadow'>
                                <form className='form_box'>
                                    <h1>Apointment form</h1>
                                    <input type='text' placeholder='Name'/>
                                    <input type='text' placeholder='Email'/>
                                    <input type='password' placeholder='Password'/>
                                    <textarea  placeholder='Message'></textarea>
                                    <input type='submit' value='Submit'></input>
                                </form>
                                </div>


                            </div>
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 row"></div>
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <Card className='card gap'>
                                    {/* <CardImg top width="100%" height='250px' src={cards1} alt="Card image cap"/> */}
                                    <CardBody className='c_body'>
                                    <CardTitle className='c_title'><h1>Make an appointment</h1><hr/></CardTitle>
                                    <CardText className='c_txt'>
                                        <h2>Department :</h2>
                                        <h2>Doctor Name :</h2>
                                        <h2>Patient Name :</h2>
                                        <h2>Date and Time :</h2>
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    </div>
                    <div className='row'>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <Card className='card black'>
                                <CardBody className='c_body'>
                                <CardText className='c_txt'>
                                        <h3>Address</h3>
                                        <p>Health Plus Multinational Hospital,<br/>Kennalu, Pandavapura</p>
                                        <h3>Opening Hours</h3>
                                        <p>9:00 AM to 10:00 PM</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    </div>
                <div><Footer/></div>
            </div>
        )
    }
}
export default Contact;