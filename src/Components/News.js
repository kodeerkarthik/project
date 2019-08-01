import React, { Component } from 'react';
import Paragraph from './Paragraph'
import Logo from './Logo';
import Navbar from './Navbar';
import Footer from './Footer';
import news1 from '../Images/news1.jpeg';
import news2 from '../Images/news2.jpeg';
import news3 from '../Images/news3.jpeg';
import '../Css/News.css';
import newsimg from '../Images/newsimg.png';
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
class News extends Component {
    constructor( props ){
        super( props )
        this.state = { 
            // store:[]
            medicine : 0,
            pharmacy:0,
            uncategorized : 0,
            doctors:0,
            inovations:0
        };
    }
    // componentDidMount(){
    //     axios.get('http://localhost:8000/details')
    //     .then(res => {
    //         this.setState({store: res.data});
    //         console.log(this.state.store);
    //     });
    // }

    medicineCount=()=>{  
        // this.setState({[e.target.name]:e.target.value+1});
        this.setState(prevState =>{
            return {medicine:prevState.medicine + 1}
        })
    }
    pharmacyCount=()=>{  
        this.setState(prevState =>{
            return {pharmacy:prevState.pharmacy + 1}
        })
    }
    uncategorizedCount=()=>{  
        this.setState(prevState =>{
            return {uncategorized:prevState.uncategorized + 1}
        })
    }
    doctorsCount=()=>{  
        this.setState(prevState =>{
            return {doctors:prevState.doctors + 1}
        })
    }
    inovationsCount=()=>{  
        this.setState(prevState =>{
            return {inovations:prevState.inovations + 1}
        })
    }

    myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("h2")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    render() {
        return (
            <div className='newsbody'>
                <Logo/>
                <div><Navbar/></div>
                    <div className='row'>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pagebg">
                            <div className='home_name'>NEWS</div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    </div>

                    <div className='row'>
                        <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'></div>
                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                            <div className='newssearch'>
                                <input type='text' className='newssearchbox' onChange={this.myFunction} id="myInput" placeholder='Type here to search latest news'></input>
                                <button className='newssearchbtn'>Search</button>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div> 
                        <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 row all_news_div'>
                            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                <Card className='newscard'>
                                    <CardImg top width="100%" height='100%' src={newsimg} alt="Card image cap" />
                                </Card>
                            </div>
                            <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div> 
                            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                                <ul id="myUL">
                                    <li>
                                        <div className='row c_body ncard'>
                                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                                <img src={news1} alt={"logo"} className='news_imges'></img>
                                            </div>
                                            <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
                                                <div><h2 className='c_title'>Could artificial intelligence?</h2></div>
                                                <div className='c_txt'>As it stands, doctors have access to high quality imaging, and ... 
                                                He explains that "in the case of medical imaging, you're lucky if you have 1,000 ...</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='row c_body ncard'>
                                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                                <img src={news2} alt={"logo"} className='news_imges'></img>
                                            </div>
                                            <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
                                                <div><h2 className='c_title'>Causes a pulse in the stomach?</h2></div>
                                                <div className='c_txt'>According to the National Institutes of Health (NIH), 1 in 10 people who ... 
                                                of X-ray images to give a detailed picture of tissues inside the body.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='row c_body ncard'>
                                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                                                <img src={news3} alt={"logo"} className='news_imges'></img>
                                            </div>
                                            <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
                                                <div><h2 className='c_title'>Breakthrough discovery</h2></div>
                                                <div className='c_txt'>Endoscopic imaging, or using cameras inserted directly inside the ... 
                                                implanted through a medical procedure or surgery in order to reach the ...</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>       
                        </div> 
                        <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div> 
                    </div>
                    <div className='row all_news_div'>
                        <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
                        <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 row'>
                            <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'>
                                <Card className='card category_card'>
                                    <CardBody className='c_body'>
                                        <CardTitle className='c_title head1'>​CATEGORIES</CardTitle>
                                        <CardText className='c_txt cat_txt'>
                                            <div>
                                                <span className='cat_span'>Medicine</span><span className='cat_span_count'>{this.state.medicine}</span>
                                            </div>
                                            <div>
                                                <span className='cat_span'>Pharmacy</span><span className='cat_span_count'>{this.state.pharmacy}</span>
                                            </div>
                                            <div>
                                                <span className='cat_span'>Uncategorized</span><span className='cat_span_count'>{this.state.uncategorized}</span>
                                            </div>
                                            <div>
                                                <span className='cat_span'>Doctors</span><span className='cat_span_count'>{this.state.doctors}</span>
                                            </div>
                                            <div>
                                                <span className='cat_span'>Innovations</span><span className='cat_span_count'>{this.state.inovations}</span>
                                            </div>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'></div>
                            <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'>
                                <Card className='card category_card'>
                                    <CardBody className='c_body'>
                                        <CardTitle className='c_title head1'>​MAKE AN APPOINTMENT</CardTitle>
                                        <CardText className='c_txt cat_txt'>
                                            <select className='optmt_dropdown' name='medicine' onChange={this.medicineCount}>

                                                <option>Medicine</option>
                                                <option>Anacine</option>
                                                <option>Vics action 500</option>
                                                <option>Biotiono 10000</option>
                                                <option>Zandu balm</option>
                                            </select>
                                            <select className='optmt_dropdown' name='pharmacy' onChange={this.pharmacyCount}>
                                                <option>Pharmacy</option>
                                                <option>B Pharmacy</option>
                                                <option>M Pharmacy</option>
                                            </select>
                                            <select className='optmt_dropdown' name='uncategorized' onChange={this.uncategorizedCount}>
                                                <option>Uncategorized</option>
                                                <option>Medicine</option>
                                                <option>Pharmacy</option>
                                                <option>Pharmacy</option>
                                            </select>
                                            <select className='optmt_dropdown' name='doctors' onChange={this.doctorsCount}>
                                                <option>Doctors</option>
                                                <option>Medicine</option>
                                                <option>Pharmacy</option>
                                                <option>Pharmacy</option>
                                            </select>
                                            <select className='optmt_dropdown' name='inovations' onChange={this.inovationsCount}>
                                                <option>Innovations</option>
                                                <option>3D Models To Shorten Surgeries</option>
                                                <option>AI Robot</option>
                                                <option>OR Bottlenecks </option>
                                            </select>
                                            {/* <button type="button" class="btn btn-danger opt_btn">SUBMIT</button> */}
                                        </CardText>
                                    </CardBody> 
                                </Card>
                            </div>
                        
                        </div> 
                        <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>  
                    </div>
                    <div><Paragraph/></div>
                <div><Footer/></div>
            </div>
        );
    }
}
export default News;