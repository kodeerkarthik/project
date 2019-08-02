import React, { Component } from 'react';
import { getdetails} from  './user';
import axios from 'axios'; //for accesing data from db
import Logo from './Logo';
import Navbar from './Navbar';
import Counter from './Counter';
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
import { Card, CardImg, CardText, CardBody,CardTitle, Button } from 'reactstrap';

class Service extends Component {
    constructor( props ){
        super( props )
        this.state = { 
            doctor_show : false,
            patient_show:false,
            ward_show : false,
            staff_show:false 
        };
    }
    toggleDoctors = () => {
        this.setState( { doctor_show : true,patient_show:false,ward_show : false,staff_show:false  } )
    }
    togglePatients = () => {
        this.setState( { doctor_show : false,patient_show:true,ward_show : false,staff_show:false  } )
    }
    toggleWards = () => {
        this.setState( { doctor_show : false,patient_show:false,ward_show : true,staff_show:false } )
    }
    toggleStaffs = () => {
        this.setState( { doctor_show : false,patient_show:false,ward_show : false,staff_show:true } )
    }
   
    render() {
        return (
            <div className='service_body'>
                <Logo/>
                <div><Navbar/></div>
                    <div className='row'>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pagebg">
                            <div className='home_name'>SERVICE</div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    </div>

                    <div className="row margin_top">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 row service_list">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip1} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white">
                                    <h1 className='ser-head'>Cardiology</h1>
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
                                    <h1 className='ser-head'>Intensive Care Unit</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>ICU A special department of a hospital or health care facility that provides intensive treatment 
                                        medicine and caters to patients with severe and life-threatening illnesses and injuries, which require 
                                        constant, close monitoring and support from specialist equipment and medications</p>
                               </div> 
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip3} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white ">
                                    <h1 className='ser-head'>Info Management</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Meaningful information can be used in quality management, continuous quality improvement and peer review. 
                                        By improving the quality of information, core data can be provided for randomized clinical trials, outcomes 
                                        research and many studies.</p>
                               </div> 
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip5} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white">
                                    <h1 className='ser-head'>Medical Records</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Includes a variety of types of "notes" entered over time by health care professionals, recording 
                                        observations and administration of drugs and therapies, orders for the administration of drugs and 
                                        therapies, test results, x-rays, reports, etc.</p>
                               </div> 
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip6} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white">
                                    <h1 className='ser-head'>Gynecology</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Specialist nurses, midwives and imaging technicians provide maternity services such as: 
                                        antenatal and postnatal care, maternal and foetal surveillance, and prenatal diagnosis.</p>
                               </div> 
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 row">
                               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <img src={clip4} alt={"logo"} className='clips'></img>
                               </div> 
                               <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 white ">
                                    <h1 className='ser-head'>Physiotherapy</h1>
                               </div>
                               <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 white justify'>
                                    <p>Physiotherapists work through physical therapies such as exercise, massage, and manipulation of bones, 
                                        joints and muscle tissues.</p>
                               </div> 
                            </div>
                        </div>   
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    </div>

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
                                        <div className='h_details'><Button onClick={ this.toggleDoctors }  className='c_btn'>Number of Doctors</Button></div>
                                        <div className='h_details'><Button onClick={ this.togglePatients } className='c_btn'>Number of Patients</Button></div>
                                        <div className='h_details'><Button onClick={ this.toggleWards } className='c_btn'>Number of Wards</Button></div>
                                        <div className='h_details'><Button onClick={ this.toggleStaffs } className='c_btn'>Number of Staff</Button></div>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                        <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'>
                            <Card >
                                <CardBody className='c_body '>
                                    <CardTitle className='c_title '>Details</CardTitle>
                                    <CardText >
                                        { this.state.doctor_show && <Dcontent /> }
                                        { this.state.patient_show && <Pcontent /> }
                                        { this.state.ward_show && <Wcontent /> }
                                        { this.state.staff_show && <Scontent /> }
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                </div>
                <div className='row'>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                    <Counter/>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                </div>
                <div><Footer/></div>
            </div>
        );
    }
}
class Dcontent extends Component{
    state = { users:[]}
    componentDidMount(){
        axios.get('http://localhost:8000/details')
        .then(res => {
            this.setState({users: res.data});
            console.log(this.state.users);
        });
    }
    render(){
        return(
            <div className='onimagetext'>
               <div> Number of Doctors  :   {this.state.users.map(user => <span>{user.doctors}</span>)}</div>
            </div>
        )
    }
}
class Pcontent extends Component{
    state = { users:[]}
    componentDidMount(){
        axios.get('http://localhost:8000/details')
        .then(res => {
            this.setState({users: res.data});
            console.log(this.state.users);
        });
    }
    render(){
        return(
            <div className='onimagetext'>
                Number of Patients :  {this.state.users.map(user => <span>{user.patients}</span>)}
            </div>
        )
    }
}
class Wcontent extends Component{
    state = { users:[]}
    componentDidMount(){
        axios.get('http://localhost:8000/details')
        .then(res => {
            this.setState({users: res.data});
            console.log(this.state.users);
        });
    }
    render(){
        return(
            <div className='onimagetext'>
                Number of Wards    :   {this.state.users.map(user => <span>{user.wards}</span>)}
            </div>
        )
    }
}
class Scontent extends Component{
    state = { users:[]}
    componentDidMount(){
        axios.get('http://localhost:8000/details')
        .then(res => {
            this.setState({users: res.data});
            console.log(this.state.users);
        });
    }
    render(){
        return(
            <div className='onimagetext'>
                Number of Staff    :   {this.state.users.map(user => <span>{user.staff}</span>)}
            </div>
        )
    }
}

export default Service;