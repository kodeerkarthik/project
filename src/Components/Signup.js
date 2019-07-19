import React, { Component } from 'react';
import Logo from './Logo';
// import Footer from './Footer';

import '../Css/Signup.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            mobile:'',
            fnameError:'',
            lnameError:'',
            emailError:'',
            passwordError:'',
            mobileError:'',
            modal: false,login_modal: false,
            array:[] 
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
    
        let t=0;
        let reqobj={
            firstname1:this.state.firstname,
            lastname1:this.state.lastname,
            email1:this.state.username,
            password1:this.state.password,
            mobile1:this.state.mobile 
        }
        let ary=this.state.array.push(reqobj)
        this.setState({ary});
        // let fnamel=this.state.firstname.length, lnamel=this.state.lastname.length, emaill=this.state.username.length, pwdl=this.state.password.length, mobl=this.state.mobile.lenght ;
        let reg_user=/^[A-Za-z0-9]{2,10}$/;
        let reg_pwd=/^[@#][A-Za-z0-9]{7,13}$/;
        let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let reg_mob=/^(\+\d{1,3}[- ]?)?\d{10}$/;
       
        if(!this.state.firstname) this.setState({fnameError:'Firstname is required'});
        else if(!reg_user.test(this.state.firstname)) this.setState({fnameError:'Invalid Firstname'});
        else{
             t++;
             this.setState({fnameError:''});
        }
           
        if(!this.state.lastname) this.setState({lnameError:'Lastname is required'});
        else if(!reg_user.test(this.state.lastname)) this.setState({lnameError:'Invalid Lastname'}); 
        else {
            t++;
            this.setState({lnameError:''});
        }
        if(!this.state.email) this.setState({emailError:'Email is required'});
        else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
        else {
            t++;
            this.setState({emailError:''});
        }

        if(!this.state.password) this.setState({passwordError:'Password is required'});
        else if(!reg_pwd.test(this.state.password)) this.setState({passwordError:'Invalid Password'});
        else {
            t++;
            this.setState({passwordError:''});
        }
        if(!this.state.mobile) this.setState({mobileError:'Mobile number is required'});
        else if(!reg_mob.test(this.state.mobile)) this.setState({mobileError:'Invalid Mobile number'});
        else {
            t++;
            this.setState({passwordError:''});
        }
        
        if(t>4) {
            // this.props.REG();
            // browserHistory.push('/');
            
        }
    }  







    
    
      

    // constructor(props) {
    //     super(props);
        // this.state = { modal: false,login_modal: false};

    // }
    toggle=()=> {
        debugger;
        this.setState({
          modal: !this.state.modal
        });
    }
    login_toggle=()=> {
        this.setState({
          login_modal: !this.state.login_modal
        });
    }

    render() {
        return ( 
            <div className="body">
                <Logo/>
                <div className='row body1'>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Button color="success" className='register' onClick={this.toggle}>Sign up</Button>
                    </div>
                    
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Button color="success" className='register' onClick={this.login_toggle}>sign in</Button>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>
                
                <Modal isOpen={this.state.modal}>
                    <form onSubmit={this.handleSubmit} className='signup_form'> 
                        <ModalBody className=" row signup_box">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 signup_image"></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h1 className='signup_heading'>Sign up here</h1>
                                    <input type='text' name='firstname' onChange={this.handleChange} className='input_box' placeholder='First Name..'></input>
                                    <p className='red'>{this.state.fnameError}</p>
                                    <input type='text' name='lastname' onChange={this.handleChange} className='input_box' placeholder='Last Name..'></input>
                                    <p className='red'>{this.state.lnameError}</p>
                                    <input type='text' name='email' onChange={this.handleChange} className='input_box' placeholder='Email..'></input>
                                    <p className='red'>{this.state.emailError}</p>
                                    <input type='password' name='password' onChange={this.handleChange} className='input_box' placeholder='Password..'></input>
                                    <p className='red'>{this.state.passwordError}</p>
                                    <input type='text' name='mobile' onChange={this.handleChange} className='input_box' placeholder='Mobile Number..'></input>  
                                    <p className='red'>{this.state.mobileError}</p>                                                          
                                    <div className="radio">
                                        <label className="select_one"><input type="radio" value="option1" /> Male</label>
                                        <label className="select_one"><input type="radio" value="option1" /> Female</label>
                                        <label className="select_one"><input type="radio" value="option1" /> Others</label>
                                    </div>
                                    <button type="button" onClick={this.handleSubmit} class="btn btn-success signup_btn">SIGN UP</button>
                                    {/* <label className="signup_lbl">Already registered..?</label><button type="button" class="btn link_btn">Login</button>        */}
                                </div>    
                        </ModalBody>
                        <ModalFooter>
                            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>



                <Modal isOpen={this.state.login_modal} className='signin_modal'>
                    <form onSubmit={this.handleSubmit} className='login_form'> 
                        <ModalBody className=" row signup_box">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 login_image"></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h1 className='login_heading'>SIGN IN</h1>
                                    <input type='text' className='input_box' placeholder='Email..'></input>
                                    <input type='password' className='input_box' placeholder='Password..'></input>                                                 
                                    <button type="button" class="btn btn-success login_btn">SIGN IN</button>
                                </div>    
                        </ModalBody>
                        <ModalFooter>
                            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
                            <Button color="danger" onClick={this.login_toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
                {/* <Footer/> */}
            </div> 
        );
    }
}
export default Signup;
