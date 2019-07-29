
// import React, { Component } from 'react';
// import SearchResults from 'react-filter-search';
 
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       value: ''
//     };
//   }
//   componentWillMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => this.setState({ data: json }));
//   }
//   handleChange = event => {
//     const { value } = event.target;
//     this.setState({ value });
//   };
//   render() {
//     const { data, value } = this.state;
//     return (
//       <div>
//         <input type="text" value={value} onChange={this.handleChange} />
//         <SearchResults
//           value={value}
//           data={data}
//           renderResults={results => (
//             <div>
//               {results.map(el => (
//                 <div>
//                   <span>{el.name}</span>
//                   <span>{el.email}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         />
//       </div>
//     );
//   }
// }
// export default App;






import React from "react";
import DatePicker from "react-datepicker";
import './demo.css'
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <div className='demobody'>
       <span className='date'>
      <DatePicker  
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      </span> 
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        timeCaption="Time"
      />


      <div className='search_box1'>
        <input className='search_txt1' type="text" placeholder='Type to search'></input>
        <a className="search_btn1" href="#"><i className="fa fa-search"></i></a>
      </div>







      </div>
    );
  }
}

export default Example;