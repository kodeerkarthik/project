import React, { Component } from 'react';
// import CountTo from 'react-count-to';



import day from '../Images/day.png'
import patient from '../Images/patient.png'
import doct from '../Images/doct.png'
import lab from '../Images/lab.png'
import '../Css/Counter.css'
import CountUp from 'react-countup';
class Counter extends Component {
   
    render() {
       
        return (
            <div className='counter_body'>
                <div className='row counter'>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 eachcounter'>
                        <img src={day} alt={"day"}></img><p>Days a year</p>
                        <h2 className='countnum'><CountUp  end={365} delay={1} //suffix=' Days'
                        /></h2>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 eachcounter'>
                        <img src={patient} alt={"patient"}></img><p>Patient a year</p>

                        <h2 className='countnum'><CountUp  end={564} delay={2}/></h2>

                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 eachcounter'>
                        <img src={doct} alt={"doct"}></img><p>Amazing_Doctors</p>
                        <h2 className='countnum'><CountUp  end={164} delay={3}/></h2>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                    <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 eachcounter'>
                        <img src={lab} alt={"lab"}></img><p>Lab results</p>
                        <h2 className='countnum'><CountUp  end={765} delay={4}/></h2>
                    </div>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                </div>
            </div>
        );
    }

}
export default Counter;