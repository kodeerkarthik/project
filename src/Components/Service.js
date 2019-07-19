import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Footer from './Footer';
import clip1 from '../Images/clip1.png'
import clip2 from '../Images/clip2.png'
import clip3 from '../Images/clip3.png'
import clip4 from '../Images/clip4.png'
import clip5 from '../Images/clip5.png'
import clip6 from '../Images/clip6.png'
import cards1 from '../Images/cards1.jpg'
import cards2 from '../Images/cards2.jpg'
import cards3 from '../Images/cards3.jpg'
import '../Css/Service.css';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';

class Service extends Component {
    render() {
        return (
            <div className='service_body'>
                <Logo/>
                <div><Navbar/></div>
                    <div className="row margin_top">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 row service_list">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip1} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white">
                                    <h1 className='ser-head'>CARDIOLOGY</h1>
                                </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Plan covers the cost of medically necessary hospital services, provided at a hospital, on an inpatient or outpatient 
                                    basis within Canada. You must be registered under the NWT Health Care Plan to receive these services.</p>
                               </div> 
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip2} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white">
                                    <h1 className='ser-head'>CARDIOLOGY</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Plan covers the cost of medically necessary hospital services, provided at a hospital, on an inpatient or outpatient 
                                    basis within Canada. You must be registered under the NWT Health Care Plan to receive these services.</p>
                               </div> 
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip3} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white ">
                                    <h1 className='ser-head'>CARDIOLOGY</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Plan covers the cost of medically necessary hospital services, provided at a hospital, on an inpatient or outpatient 
                                    basis within Canada. You must be registered under the NWT Health Care Plan to receive these services.</p>
                               </div> 
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip5} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white">
                                    <h1 className='ser-head'>CARDIOLOGY</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Plan covers the cost of medically necessary hospital services, provided at a hospital, on an inpatient or outpatient 
                                    basis within Canada. You must be registered under the NWT Health Care Plan to receive these services.</p>
                               </div> 
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip6} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white">
                                    <h1 className='ser-head'>CARDIOLOGY</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Plan covers the cost of medically necessary hospital services, provided at a hospital, on an inpatient or outpatient 
                                    basis within Canada. You must be registered under the NWT Health Care Plan to receive these services.</p>
                               </div> 
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip4} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white ">
                                    <h1 className='ser-head'>CARDIOLOGY</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Plan covers the cost of medically necessary hospital services, provided at a hospital, on an inpatient or outpatient 
                                    basis within Canada. You must be registered under the NWT Health Care Plan to receive these services.</p>
                               </div> 
                            </div>
                        </div>   
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    </div>







                    {/* <div className="row margin_top">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 white">
                                <img src={clip1} alt={"logo"} className='clips'></img>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 white">
                                <img src={clip2} alt={"logo"} className='clips'></img>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 white">
                                <img src={clip3} alt={"logo"} className='clips'></img>
                            </div>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    </div> */}
                    {/* <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 white">
                                <p>Plan covers the cost of medically necessary hospital services, provided at a hospital, on an inpatient or outpatient 
                                    basis within Canada. You must be registered under the NWT Health Care Plan to receive these services.</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 white">
                                <p>Plan covers the cost of medically necessary hospital services, provided at a hospital, on an inpatient or outpatient 
                                    basis within Canada. You must be registered under the NWT Health Care Plan to receive these services.</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 white">
                                <p>Plan covers the cost of medically necessary hospital services, provided at a hospital, on an inpatient or outpatient 
                                    basis within Canada. You must be registered under the NWT Health Care Plan to receive these services.</p>
                            </div>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    </div> */}

                    <div className='row'>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                        <div className='row cards_list'>
                            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                <Card className='card'>
                                    <CardImg top width="100%" height='250px' src={cards1} alt="Card image cap"/>
                                    <CardBody className='c_body'>
                                    <CardTitle className='c_title'>Commit to be Fit</CardTitle>
                                    <CardText className='c_txt'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button className='c_btn'>Click</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                <Card className='card'>
                                    <CardImg top width="100%" height='250px' src={cards2} alt="Card image cap" />
                                    <CardBody className='c_body'>
                                    <CardTitle className='c_title'>Eat right, be bright</CardTitle>
                                    <CardText className='c_txt'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button className='c_btn'>Click</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                <Card className='card'>
                                    <CardImg top width="100%" height='250px' src={cards3} alt="Card image cap" />
                                    <CardBody className='c_body'>
                                    <CardTitle className='c_title'>No pain no gain</CardTitle>
                                    <CardText className='c_txt'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button className='c_btn'>Click</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                </div>
                <div className='row margintop'>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 row'>
                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                            <Card >
                                <CardBody className='c_body cardbg'>
                                    <CardTitle className='c_title color'>Hospital Details</CardTitle>
                                    <CardText >
                                        <div className='h_details'><Button className='c_btn'>Number of Doctors</Button></div>
                                        <div className='h_details'><Button className='c_btn'>Number of Patients</Button></div>
                                        <div className='h_details'><Button className='c_btn'>Number of Wards</Button></div>
                                        <div className='h_details'><Button className='c_btn'>Number of Staff</Button></div>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                            <Card >
                                <CardBody className='c_body '>
                                    <CardTitle className='c_title '>heading</CardTitle>
                                    <CardText >
                                        content
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                </div>
                <div><Footer/></div>
            </div>
        );
    }
}

export default Service;