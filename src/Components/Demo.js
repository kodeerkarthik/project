import React, { Component } from 'react';
class Demo extends Component {
  constructor(props){
      super(props);
      this.state={
         year:'',
         total:'' 
      }
  }
handlec=(e)=>{
  this.setState({[e.target.name]:e.target.value});
    }
handles=()=>{
  var {year,total}=this.state;
  total=year*5/100;
  this.setState({total:total});
  console.log(total);
}
  render() {
    return ( 
      <div >
        <input type='text' name='year' onChange={this.handlec}/>
        <p>{this.state.total}</p>
        <input type='button' value='submit' onClick={this.handles}/>
      </div>
  )}
}
export default Demo;