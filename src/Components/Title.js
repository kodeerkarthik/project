import React, { Component } from 'react';
import '../Css/Title.css'
import smoke from '../Images/smoke.mp4'
import browserHistory from '../Utils/browserHistory' 
// import Home from '../Components/Home'
class Title extends Component {

    componentDidMount() {
        debugger
        setTimeout(() => {
            browserHistory.push('/home')
        }, 8000)
    }


    render() {
        return (
            <div className='title_body'>
                <section>
                    <video src={smoke} autoplay='true'  ></video>
                    <h1 className='title'>
                        <span>H</span>
                        <span>E</span> 
                        <span>A</span>
                        <span>L</span>
                        <span>T</span>
                        <span>H</span>
                        <span>-</span>
                        <span>P</span>
                        <span>L</span>
                        <span>U</span>
                        <span>S</span>
                    </h1>
                </section>
            </div>
        );
    }
}
export default Title;