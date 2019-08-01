import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/About.css';
import card1 from '../Images/card1.jpg'
import card2 from '../Images/card2.jpg'
import card3 from '../Images/card3.jpg'
import doc1 from '../Images/doc1.jpg';
import doc2 from '../Images/doc2.jpg';
import doc3 from '../Images/doc3.jpg';
import doc4 from '../Images/doc4.jpg';
import doc5 from '../Images/doc5.jpg';
import doc6 from '../Images/doc6.jpg';
import doc7 from '../Images/doc7.jpg';
import doc8 from '../Images/doc8.jpeg';
import axios from 'axios';

import { Card, CardImg, CardText, CardBody,CardTitle,Button } from 'reactstrap';
class About extends Component {
    constructor( props ){
        super( props )
        this.state = { 
            users:[],
            count1:0,count2:0,count3:0,count4:0,count5:0,count6:0,count7:0,count8:0
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/selectdoctor')
        .then(res => {
            console.log(res)
            this.setState({users: res.data});
            console.log(this.state.users);
        });
    }
    
    render() {
        return (
            <div className='about_body'>
                <div><Logo/></div>
                <div><Navbar/></div>
                <div className='row'>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pagebg">
                        <div className='home_name'>ABOUT US</div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>

                <div className='row'>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                        <h1 className='heading1'> WHY CHOOSE US </h1>
                        <div className='row cards_list'>
                            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                <Card className='card'>
                                    <CardImg top width="100%" height='250px' src={card1} alt="Card image cap"/>
                                    <CardBody className='c_body'>
                                    <CardTitle className='c_title'>Best Doctors</CardTitle>
                                    <CardText className='c_txt'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button className='c_btn'>Click</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                <Card className='card'>
                                    <CardImg top width="100%" height='250px' src={card2} alt="Card image cap" />
                                    <CardBody className='c_body'>
                                    <CardTitle className='c_title'>Caring Staff</CardTitle>
                                    <CardText className='c_txt'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button className='c_btn'>Click</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                <Card className='card'>
                                    <CardImg top width="100%" height='250px' src={card3} alt="Card image cap" />
                                    <CardBody className='c_body'>
                                    <CardTitle className='c_title'>Medical Counseling</CardTitle>
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
                    <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                        <div className='row'>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc1} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle className='card_ttl' >Sujatha Datt</CardTitle>
                                    <CardText className='designation'>
                                        Surgen
                                        {this.state.users.map(category => {
                                            if(category.doctor==='Sujatha Datt')
                                            return (
                                            <h3>{category.patient}</h3>  
                                            )
                                            })}
                                    </CardText>
                                    <Button className='c_btn2'>Update</Button>
                                    <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc2} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle className='card_ttl'>Vandana Murthy</CardTitle>
                                    <CardText className='designation'>Surgen
                                    {this.state.users.map(category => {
                                            if(category.doctor==='Vandana Murthy')
                                            return (
                                            <h3>{category.patient}</h3>  
                                            )
                                        })}
                                    </CardText>
                                    <Button className='c_btn2'>Update</Button>
                                    <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc3} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle className='card_ttl'>David Carson</CardTitle>
                                    <CardText className='designation'>Surgen
                                    {this.state.users.map(category => {
                                            if(category.doctor==='David Carson')
                                            return (
                                            <h3>{category.patient}</h3>  
                                            )
                                        })}
                                    </CardText>
                                    <Button className='c_btn2'>Update</Button>
                                    <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                            
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc4} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle className='card_ttl'>Michel Smith</CardTitle>
                                    <CardText className='designation'>Surgen
                                    {this.state.users.map(category => {
                                            if(category.doctor==='Michel Smith')
                                            return (
                                            <h3>{category.patient}</h3>  
                                            )
                                        })}
                                    </CardText>
                                    <Button className='c_btn2'>Update</Button>
                                    <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                            
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                </div>
                <div className='row margintop'>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                        <div className='row'>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc5} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle className='card_ttl'>Sumitha Singh</CardTitle>
                                    <CardText className='designation'>Surgen
                                    {this.state.users.map(category => {
                                            if(category.doctor==='Sumitha Singh')
                                            return (
                                            <h3>{category.patient}</h3>  
                                            )
                                        })}
                                    </CardText>
                                    <Button className='c_btn2'>Update</Button>
                                    <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                                
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc6} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle className='card_ttl'>Smrithi Mandanna</CardTitle>
                                    <CardText className='designation'>Surgen
                                    {this.state.users.map(category => {
                                            if(category.doctor==='Smrithi Mandanna')
                                            return (
                                            <h3>{category.patient}</h3>  
                                            )
                                        })}
                                    </CardText>
                                    <Button className='c_btn2'>Update</Button>
                                    <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                                 
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc7} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle className='card_ttl'>Mogambo</CardTitle>
                                    <CardText className='designation'>Surgen
                                        {this.state.users.map(category => {
                                            if(category.doctor==='Mogambo')
                                            return (
                                            <h3>{category.patient}</h3>  
                                            )
                                        })}
                                    </CardText>
                                    <Button className='c_btn2'>Update</Button>
                                    <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                            
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc8} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle className='card_ttl'>Gold Smith</CardTitle>
                                    <CardText className='designation'>Surgen
                                    {this.state.users.map(category => {
                                            if(category.doctor==='Gold Smith')
                                            return (
                                            <h3>{category.patient}</h3>  
                                            )
                                        })}
                                    </CardText>
                                    <Button className='c_btn2'>Update</Button>
                                    <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                                
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                </div>
                <div><Footer/></div>   
            </div>
        );
    }
}

export default About;