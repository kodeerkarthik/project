import React, { Component } from 'react';
import day from '../Images/day.png'
import patient from '../Images/patient.png'
import doct from '../Images/doct.png'
import lab from '../Images/lab.png'
import '../Css/Counter.css'
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 0,
            doctors: 0,
            patient:0,
            lab:0
        }
    }
    render() {
        const count = this.state;
        return (
            <div className='counter_body'>
                <div className='row counter'>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 eachcounter'>
                        <img src={day} alt={"day"}></img><p>Days a year</p>
                        <h2 className='countnum'>{count.day}</h2>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 eachcounter'>
                        <img src={patient} alt={"patient"}></img><p>Patient a year</p>
                        <h2 className='countnum'>{count.patient}</h2>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 eachcounter'>
                        <img src={doct} alt={"doct"}></img><p>Amazing_Doctors</p>
                        <h2 className='countnum'>{count.doctors}</h2>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 eachcounter'>
                        <img src={lab} alt={"lab"}></img><p>Lab results</p>
                        <h2 className='countnum'>{count.lab}</h2>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                </div>
            </div>
        );
    }
    componentDidMount () {
        this.myInterval =setInterval(() =>{
            this.setState(prevState => ({
                day: prevState.day + 1,
                patient: prevState.patient + 1,
                doctors: prevState.doctors + 1,
                lab: prevState.lab + 1
            }))
        }, 1000)
    }
}
export default Counter;