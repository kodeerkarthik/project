import React, { Component } from 'react';
import '../Css/Contact.css';
import Logo from './Logo';
import Navbar from './Navbar';
import Footer from './Footer';
import api from '../Api/index';
import { Card, CardText, CardBody,CardTitle} from 'reactstrap';
import browserHistory from '../Utils/browserHistory'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            date: new Date(),
            message:'',
            nameError:'',
            emailError:'',
            passwordError:'',
            messageError:'',
            department:'',
            doctor:'',
            patient:'',
        }
    }
    handleDate=(date)=> {
        this.setState({
          date: date
        });
      }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }


    handleclick = async () => {
        debugger
        const { department,doctor,date,patient} = this.state;
        const payload = {department,doctor,date,patient}
        console.log(payload)
        await api.selectDoctor(payload).then(res => {
            this.setState({
                department: '',
                doctor: '',
                patient:'',
            })
            browserHistory.push("/contact");
        })
    }

    handleSubmit = async () => {
        debugger
        const { name,email,date,message } = this.state;
        const payload = { name,email,date,message }
        
        let reg_user=/^[A-Za-z0-9]{2,10}$/;

        let reg_email=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let t=0;
        if(!this.state.name) this.setState({nameError:'Name is required'});
        else if(!reg_user.test(this.state.name)) this.setState({nameError:'Invalid Name'});
        else{
            t++;
            this.setState({nameError:''});
        }
        if(!this.state.email) this.setState({emailError:'Email is required'});
        else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
        else {
            t++;
            this.setState({emailError:''});
        }
        if(!this.state.message) this.setState({mobileError:'Message is required'});
        else {
            t++;
            this.setState({passwordError:''});
        }
        console.log(this.state);
        if(t>2) {
            await api.appoint(payload).then(res => { 
                this.setState({
                    name: '',
                    email: '',
                    date:'',
                    message:''
                })
                browserHistory.push("/contact");
            })
        }
    }

    render() {
        return (
            <div className='contact_body'>
                <Logo/>
                <div><Navbar/></div>
                    <div className='row'>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pagebg ">
                            <div className='home_name'>CONTACT US</div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    </div>

                    <div className='row'>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className='shadow'>
                                <div className='form_box'>
                                    <h1>Apointment form</h1>
                                    <input type='text' className='form_input' name='name' placeholder='Name' onChange={this.handleChange}/>
                                    <p className='red'>{this.state.nameError}</p>
                                    <input type='text' className='form_input' name='email' placeholder='Email' onChange={this.handleChange}/>
                                    <p className='red'>{this.state.emailError}</p>
                                    <DatePicker className='form_input contactDoctor1' 
                                        selected={this.state.date}
                                        onChange={this.handleDate}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"
                                    />
                                    <textarea  placeholder='Message' className='form_input' name='message' onChange={this.handleChange}></textarea>
                                    <p className='red'>{this.state.messageError}</p> 
                                    <input type='submit' onClick={this.handleSubmit} value='Submit'></input>
                                </div>
                                </div>
                            </div>
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 row"></div>
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <Card className='card gap'>
                                    {/* <CardImg top width="100%" height='250px' src={cards1} alt="Card image cap"/> */}
                                    <CardBody className='c_body'>
                                    <CardTitle className='c_title'><h1>Make an appointment</h1><hr/></CardTitle>
                                    <CardText className='c_txt'>
                                        <select className='contactDoctor' name='department' onChange={this.handleChange}>
                                            <option>Department</option>
                                            <option>Cardiology</option>
                                            <option>Dermatology</option>
                                            <option>Immunology</option>
                                            <option>Hepatology</option>
                                            <option>Psychiatry</option>
                                            <option>Endocrinology</option>
                                        </select>
                                        <select className='contactDoctor' name='doctor' onChange={this.handleChange}>
                                            <option>Doctor Name</option>
                                            <option>Sujatha Datt</option>
                                            <option>Vandana Murthy</option>
                                            <option>David Carson</option>
                                            <option>Michel Smith</option>
                                            <option>Sumitha Singh</option>
                                            <option>Smrithi Mandana</option>
                                            <option>Mogambo</option>
                                            <option>Gold Smith</option>
                                        </select>
                                        <DatePicker className='contactDoctor' 
                                        selected={this.state.date}
                                        onChange={this.handleDate}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"
                                    />
                                        <input type='text' placeholder='Patient Name' className='contactDoctor' name='patient' onChange={this.handleChange}/>    
                                        <input type='button' className='contactDoctorBTN' value='SUBMIT' onClick={this.handleclick}/>
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
                                        <p>Sunday : 9:00 AM to 10:00 PM<br/>Monday-Saturday : 24/6</p>
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