import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/About.css';
import api from '../Api/index';
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
import {  Modal,ModalBody,ModalFooter } from 'reactstrap';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";


import { Card, CardImg, CardText, CardBody,CardTitle,Button } from 'reactstrap';
class About extends Component {
    constructor( props ){
        super( props )
        this.state = { 
            name:'',
            email:'',
            message:"",
            users:[],
            date:'',
            updt:[],
            id:'',
            modal:false,modal1:false,modal2:false,modal3:false,modal4:false,modal5:false,modal6:false,modal7:false,modal8:false,
            count1:0,count2:0,count3:0,count4:0,count5:0,count6:0,count7:0,count8:0
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleDate=(date)=> {
        this.setState({
          date: date
        });
      }
    toggle=()=>{this.setState({modal:!this.state.modal});}

    toggle1=()=>{this.setState({modal1: !this.state.modal1});}
    toggle2=()=>{this.setState({modal2: !this.state.modal2});}
    toggle3=()=>{this.setState({modal3: !this.state.modal3});}
    toggle4=()=>{this.setState({modal4: !this.state.modal4});}
    toggle5=()=>{this.setState({modal5: !this.state.modal5});}
    toggle6=()=>{this.setState({modal6: !this.state.modal6});}
    toggle7=()=>{this.setState({modal7: !this.state.modal7});}
    toggle8=()=>{this.setState({modal8: !this.state.modal8});}
    
    componentDidMount(){
        axios.get('http://localhost:8000/selectdoctor')
        .then(res => {
            console.log(res)
            this.setState({users: res.data});
        });
        axios.get('http://localhost:8000/appointment')
        .then(res => {
            console.log(res)
            this.setState({updt: res.data});
        });
    }

    delete = (id) => {
        api.RemoveById(id)
        window.location.reload()
    }
    
    update = (id) => {
        debugger
        console.log("hii")
        const  {name,email,date,message}=this.state; 
        const payload={name,email,date,message,id}
        api.UpdateById(id,payload).then(res=>{
            window.location.reload()
        })  
    }
    

    render() {
        var sujatha=0,vandana=0,david=0,michel=0,sumitha=0,smrithi=0,mogambo=0,gold=0;
        return (
            <div className='about_body'>
                <div><Logo/></div>
                <div><Navbar/></div>
                <div></div>
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

                <Modal isOpen={this.state.modal}>
                    <ModalBody>
                        <input type='text'  name='name' placeholder='Name' onChange={this.handleChange}/>
                        <input type='text'  name='email' placeholder='Email' onChange={this.handleChange}/>
                        <input type='text' name='message' placeholder='message' onChange={this.handleChange}/>
                        <DatePicker className='updtTime' selected={this.state.date} onChange={this.handleDate}
                        showTimeSelect
                        timeFormat="HH:mm" timeIntervals={15} dateFormat="MMMM d, yyyy h:mm aa" timeCaption="time"/>
                        {this.state.updt.map(update => {return <tr>
                        <td>{update.name}</td>
                        <td>{update.date}</td>
                        <td><button className='updateBtn' onClick={(e)=> this.update(update._id)}>Update</button></td>
                        </tr>})}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

  {/*-----------------------------------------Doctors-----------------------------------------------------------------               */}
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
                                        <Modal isOpen={this.state.modal1}>
                                            <ModalBody>
                                            {sujatha>0?<p></p>:<p>No Appointment are there</p>}
                                            {this.state.users.map(category => {
                                                if(category.doctor==='Sujatha Datt')return(
                                                <tr>
                                                    <td>{category.patient}</td><td>{category.department}</td>
                                                    <button  onClick={(e)=> this.delete(category._id)}>delete</button>
                                                </tr>)})}
                                            </ModalBody>
                                            <ModalFooter><Button color="danger" onClick={this.toggle1}>Cancel</Button></ModalFooter>
                                        </Modal>
                                        <Button onClick={this.toggle} className='c_btn2'>Update</Button>
                                        <Button onClick={this.toggle1} className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>
                            </div>
{/* ---------------------------------------------------------------------------------------------------------- */}
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
                                        <Modal isOpen={this.state.modal2}>
                                            {vandana>0?<p></p>:<p>No Appointment are there</p>}
                                            <ModalBody>
                                            {this.state.users.map(category => {
                                                if(category.doctor==='Vandana Murthy')return(
                                                <tr>
                                                    <td>{category.patient}</td><td>{category.department}</td>
                                                    <button  onClick={(e)=> this.delete(category._id)}>delete</button>
                                                </tr>)})}
                                            </ModalBody> 
                                            <ModalFooter><Button color="danger" onClick={this.toggle2}>Cancel</Button></ModalFooter>
                                        </Modal>
                                        <Button onClick={this.toggle} className='c_btn2'>Update</Button>
                                        <Button onClick={this.toggle2} className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>
                            </div>
{/* ----------------------------------------------------------------------------------------------------------  */}                            
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
                                        <Modal isOpen={this.state.modal3}>
                                            {david>0?<p></p>:<p>No Appointment are there</p>} 
                                            <ModalBody>
                                            {this.state.users.map(category => {
                                                if(category.doctor==='David Carson')return(
                                                <tr>
                                                    <td>{category.patient}</td><td>{category.department}</td>
                                                    <button  onClick={(e)=> this.delete(category._id)}>delete</button>
                                                </tr>)})}
                                            <ModalFooter><Button color="danger" onClick={this.toggle3}>Cancel</Button></ModalFooter>
                                            </ModalBody>
                                        </Modal>
                                        <Button onClick={this.toggle} className='c_btn2'>Update</Button>
                                        <Button onClick={this.toggle3} className='c_btn1'>Delete</Button>
                                    </CardBody>
                                </Card>                            
                            </div>
{/* ----------------------------------------------------------------------------------------------------------  */}                        
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
                                        <Modal isOpen={this.state.modal4}>
                                            {michel>0?<p></p>:<p>No Appointment are there</p>} 
                                            <ModalBody>
                                            {this.state.users.map(category => {
                                                if(category.doctor==='Michel Smith')return(
                                                <tr>
                                                    <td>{category.patient}</td><td>{category.department}</td>
                                                    <button  onClick={(e)=> this.delete(category._id)}>delete</button>
                                                </tr>)})}
                                            </ModalBody>
                                            <ModalFooter><Button color="danger" onClick={this.toggle4}>Cancel</Button></ModalFooter>
                                        </Modal>
                                        <Button onClick={this.toggle} className='c_btn2'>Update</Button>
                                        <Button onClick={this.toggle4} className='c_btn1'>Delete</Button>
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
                                        <Modal isOpen={this.state.modal5}>
                                            {sumitha>0?<p></p>:<p>No Appointment are there</p>} 
                                            <ModalBody>
                                            {this.state.users.map(category => {
                                                if(category.doctor==='Sumitha Singh')return(
                                                <tr>
                                                    <td>{category.patient}</td><td>{category.department}</td>
                                                    <button  onClick={(e)=> this.delete(category._id)}>delete</button>
                                                </tr>)})}
                                            </ModalBody>
                                            <ModalFooter><Button color="danger" onClick={this.toggle5}>Cancel</Button></ModalFooter>
                                        </Modal>
                                        <Button onClick={this.toggle} className='c_btn2'>Update</Button>
                                        <Button onClick={this.toggle5} className='c_btn1'>Delete</Button>
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
                                        <Modal isOpen={this.state.modal6}>
                                            {smrithi>0?<p></p>:<p>No Appointment are there</p>} 
                                            <ModalBody>
                                            {this.state.users.map(category => {
                                                if(category.doctor==='Smrithi Mandana')return(
                                                <tr>
                                                    <td>{category.patient}</td><td>{category.department}</td>
                                                    <button  onClick={(e)=> this.delete(category._id)}>delete</button>
                                                </tr>)})}
                                            </ModalBody>
                                            <ModalFooter><Button color="danger" onClick={this.toggle6}>Cancel</Button></ModalFooter>
                                        </Modal>
                                        <Button onClick={this.toggle} className='c_btn2'>Update</Button>
                                        <Button onClick={this.toggle6} className='c_btn1'>Delete</Button>
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
                                        <Modal isOpen={this.state.modal7}>
                                            {mogambo>0?<p></p>:<p>No Appointment are there</p>} 
                                            <ModalBody>
                                            {this.state.users.map(category => {
                                                if(category.doctor==='Mogambo')return(
                                                <tr>
                                                    <td>{category.patient}</td><td>{category.department}</td>
                                                    <button  onClick={(e)=> this.delete(category._id)}>delete</button>
                                                </tr>)})}
                                            </ModalBody>
                                            <ModalFooter><Button color="danger" onClick={this.toggle7}>Cancel</Button></ModalFooter>
                                        </Modal>
                                        <Button onClick={this.toggle} className='c_btn2'>Update</Button>
                                        <Button onClick={this.toggle7} className='c_btn1'>Delete</Button>
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
                                    <Modal isOpen={this.state.modal8}>
                                        {gold>0?<p></p>:<p>No Appointment are there</p>} 
                                            <ModalBody>
                                            {this.state.users.map(category => {
                                                if(category.doctor==='Gold Smith')return(
                                                <tr>
                                                    <td>{category.patient}</td><td>{category.department}</td>
                                                    <button  onClick={(e)=> this.delete(category._id)}>delete</button>
                                                </tr>)})}
                                            </ModalBody>
                                                <ModalFooter><Button color="danger" onClick={this.toggle8}>Cancel</Button></ModalFooter>
                                        </Modal>
                                        <Button onClick={this.toggle} className='c_btn2'>Update</Button>
                                        <Button onClick={this.toggle8} className='c_btn1'>Delete</Button>
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