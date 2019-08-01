// import React from 'react';
// import './demo.css'
// import { Slide } from 'react-slideshow-image';


// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true,

// }



// const Slideshow = () => {

//   return (
//     <div className='row'>
//       <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
//       <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
//         <Slide {...properties}>
//           <div className="each-slide">
//             <div>
//               <div><h1 className='slideparahead'>PATIENT STORIES</h1></div>
//               <p className='slidepara'>For most businesses today, storytelling is a boon for their branding. Healthcare, in particular, is a 
//               perfect candidate for telling uplifting success stories of patients who were saved by the care of a medical center. New York 
//               Presbyterian Hospital has built an entire video marketing strategy around this concept.
//               The story of patient Michael Kiernan is one example of how New York Presbyterian connects with its audience, publishing raw accounts 
//               of its doctors and nurses who were on the scene and at the public's service. Watch Kiernan's story below, and try not to cry a little.</p>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div>
//               <div><h1 className='slideparahead'>WE DARE YOU</h1></div>
//               <p className='slidepara'>The multi-award winning "We Dare You" campaign from UnitedHealthcare stands out as the gold standard for
//               what can happen when healthcare organizations engage with their following.
//               With monthly "dares," quizzes, and prizes on its website, United Healthcare encouraged followers to make one small healthy change per month 
//               and document it on social media. This interactive campaign not only led to healthier habits, but it also fostered an interactive 
//               online community of brand loyalists.</p>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div>
//               <div><h1 className='slideparahead'>YOU HAVE US</h1></div>
//               <p className='slidepara'>It's an incredibly powerful slogan: "Right now you may have cancer. But what your cancer doesn't know 
//               is -- You Have Us." Through confidence-inspiring web videos, the Dana-Farber Cancer Institute shows its personal approach to c
//               ancer treatment and state-of-the-art facilities.
//               By sharing these videos on social media (as well as using more traditional marketing techniques, like television and radio) the 
//               cancer center embodies what it means to build trust with your target audience.</p>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div>
//               <div><h1 className='slideparahead'>SURGICAL TRAINING IN 360 DEGREES</h1></div>
//               <p className='slidepara'>Medical Realities is a medical training service that uses virtual reality (VR) to teach complex healthcare 
//               topics to an audience of healthcare professionals. And some of its VR content is quite inventive.
//               The marketing campaign below teaches the video viewer a surgical procedure from the point of view of a patient. Using Oculus Rift, 
//               a VR product owned by Facebook, Medical Realities allows you to drag the video 360 degrees around with your cursor. It's an 
//               excellent way to show current and future surgeons how surgeries should be experienced according to the patient</p>
//             </div>
//           </div>
//         </Slide>
//       </div>
//       <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
//     </div>
//   )
// }
// export default Slideshow;

import React, { Component } from 'react';
import '../Css/Paragraph.css'


class Paragraph extends Component {
  state={
    first:true,
    second:false,
    third:false,
    forth:false
  }

  toggleFirst = () => {
    this.setState( { first : true,second:false,third : false,forth:false  } )
  }
  toggleSecond = () => {
    this.setState( { first : false,second:true,third : false,forth:false  } )
  }
  toggleThird = () => {
    this.setState( { first: false,second:false,third : true,forth:false  } )
  }
  toggleForth = () => {
    this.setState( { first : false,second:false,third : false,forth:true  } )
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
          <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
            { this.state.first && <Firstpara /> }
            { this.state.second && <Secondpara /> }
            { this.state.third && <Thirdpara /> }
            { this.state.forth && <Forthpara /> }
          </div>
          <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
        </div>
        <div className="row">
          <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
            <button className='para_btn' onClick={ this.toggleFirst }>1</button>
            <button className='para_btn' onClick={ this.toggleSecond }>2</button>
            <button className='para_btn' onClick={ this.toggleThird }>3</button>
            <button className='para_btn' onClick={ this.toggleForth }>4</button>
          </div>
          <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
        </div>
      </div>
    );
  }
}

class Firstpara extends Component{
  render(){
    return(
        <div>
          <div><h1 className='slideparahead'>PATIENT STORIES</h1></div>
          <p className='slidepara'>For most businesses today, storytelling is a boon for their branding. Healthcare, in particular, is a 
          perfect candidate for telling uplifting success stories of patients who were saved by the care of a medical center. New York 
          Presbyterian Hospital has built an entire video marketing strategy around this concept.
          The story of patient Michael Kiernan is one example of how New York Presbyterian connects with its audience, publishing raw accounts 
          of its doctors and nurses who were on the scene and at the public's service. Watch Kiernan's story below, and try not to cry a little.</p>
        </div>
    )
  }
}
class Secondpara extends Component{
  render(){
    return(
        <div>
          <div><h1 className='slideparahead'>YOU HAVE US</h1></div>
          <p className='slidepara'>It's an incredibly powerful slogan: "Right now you may have cancer. But what your cancer doesn't know 
          is -- You Have Us." Through confidence-inspiring web videos, the Dana-Farber Cancer Institute shows its personal approach to c
          ancer treatment and state-of-the-art facilities.
          By sharing these videos on social media (as well as using more traditional marketing techniques, like television and radio) the 
          cancer center embodies what it means to build trust with your target audience.</p>
        </div>
    )
  }
}
class Thirdpara extends Component{
  render(){
    return(
        <div>
          <div><h1 className='slideparahead'>WE DARE YOU</h1></div>
          <p className='slidepara'>The multi-award winning "We Dare You" campaign from UnitedHealthcare stands out as the gold standard for
          what can happen when healthcare organizations engage with their following.
          With monthly "dares," quizzes, and prizes on its website, United Healthcare encouraged followers to make one small healthy change per month 
          and document it on social media. This interactive campaign not only led to healthier habits, but it also fostered an interactive 
          online community of brand loyalists.</p>
        </div>
    )
  }
}
class Forthpara extends Component{
  render(){
    return(
        <div>
          <div><h1 className='slideparahead'>SURGICAL TRAINING IN 360 DEGREES</h1></div>
          <p className='slidepara'>Medical Realities is a medical training service that uses virtual reality (VR) to teach complex healthcare 
          topics to an audience of healthcare professionals. And some of its VR content is quite inventive.
          The marketing campaign below teaches the video viewer a surgical procedure from the point of view of a patient. Using Oculus Rift, 
          a VR product owned by Facebook, Medical Realities allows you to drag the video 360 degrees around with your cursor. It's an 
          excellent way to show current and future surgeons how surgeries should be experienced according to the patient</p>
        </div>
    )
  }
}

export default Paragraph;