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
        var sujatha=0,vandana=0,david=0,michel=0,sumitha=0,smrithi=0,mogambo=0,gold=0;
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
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3 '>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc1} alt="Card image cap" />
                                    <CardBody>
                                        {this.state.users.map(category => {
                                            if(category.doctor==='Sujatha Datt')
                                                sujatha=sujatha+1;
                                        })}
                                        <CardTitle className='card_ttl' >Sujatha Datt<h5 className='count'>{sujatha}</h5></CardTitle>
                                        <CardText className='designation'>Surgen</CardText>
                                        <Button className='c_btn2'>Update</Button>
                                        <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc2} alt="Card image cap" />
                                    <CardBody>
                                        {this.state.users.map(category => {
                                            if(category.doctor==='Vandana Murthy')
                                                vandana=vandana+1;
                                        })}
                                        <CardTitle className='card_ttl'>Vandana Murthy<h5 className='count'>{vandana}</h5></CardTitle>
                                        <CardText className='designation'>Surgen</CardText>
                                        <Button className='c_btn2'>Update</Button>
                                        <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc3} alt="Card image cap" />
                                    <CardBody>
                                        {this.state.users.map(category => {
                                            if(category.doctor==='David Carson')
                                                david=david+1;
                                        })} 
                                        <CardTitle className='card_ttl'>David Carson<h5 className='count'>{david}</h5></CardTitle>
                                        <CardText className='designation'>Surgen</CardText>
                                        <Button className='c_btn2'>Update</Button>
                                        <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                            
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc4} alt="Card image cap" />
                                    <CardBody>
                                        {this.state.users.map(category => {
                                            if(category.doctor==='Michel Smith')
                                                michel=michel+1;
                                        })}
                                        <CardTitle className='card_ttl'>Michel Smith<h5 className='count'>{michel}</h5></CardTitle>
                                        <CardText className='designation'>Surgen</CardText>
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
                                        {this.state.users.map(category => {
                                            if(category.doctor==='Sumitha Singh')
                                                sumitha=sumitha+1;
                                        })}  
                                        <CardTitle className='card_ttl'>Sumitha Singh<h5 className='count'>{sumitha}</h5></CardTitle>
                                        <CardText className='designation'>Surgen</CardText>
                                        <Button className='c_btn2'>Update</Button>
                                        <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                                
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc6} alt="Card image cap" />
                                    <CardBody>
                                        {this.state.users.map(category => {
                                            if(category.doctor==='Smrithi Mandana')
                                                smrithi=smrithi+1;
                                        })}
                                        <CardTitle className='card_ttl'>Smrithi Mandanna<h5 className='count'>{smrithi}</h5></CardTitle>
                                        <CardText className='designation'>Surgen</CardText>
                                        <Button className='c_btn2'>Update</Button>
                                        <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                                 
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc7} alt="Card image cap" />
                                    <CardBody>
                                        {this.state.users.map(category => {
                                            if(category.doctor==='Mogambo')
                                                mogambo=mogambo+1;
                                        })}     
                                        <CardTitle className='card_ttl'>Mogambo<h5 className='count'>{mogambo}</h5></CardTitle>
                                        <CardText className='designation'>Surgen</CardText>
                                        <Button className='c_btn2'>Update</Button>
                                        <Button className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                            
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                <Card className='img_crd'>
                                    <CardImg top width="100%" height='250px' src={doc8} alt="Card image cap" />
                                    <CardBody>
                                        {this.state.users.map(category => {
                                            if(category.doctor==='Gold Smith')
                                                gold=gold+1;
                                        })}
                                    <CardTitle className='card_ttl'>Gold Smith <h5 className='count'>{gold}</h5></CardTitle>
                                    <CardText className='designation'>Surgen </CardText>
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