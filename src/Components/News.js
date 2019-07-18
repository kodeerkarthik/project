import React, { Component } from 'react';
import Paragraph from './Paragraph'
import Logo from './Logo';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/News.css';
import newsimg from '../Images/newsimg.png';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
class News extends Component {
    render() {
        return (
            <div className='newsbody'>
                <Logo/>
                <div><Navbar/></div>
                    <div className='row'>
                        <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'></div>
                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                            <div className='newssearch'>
                                <input type='text' className='newssearchbox' placeholder='Type here to search latest news'></input>
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
                            <Card className='card ncard'>
                                <CardBody className='c_body'>
                                    <CardTitle className='c_title'>News #1</CardTitle>
                                    <CardText className='c_txt'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card className='card ncard'>
                                <CardBody className='c_body'>
                                    <CardTitle className='c_title'>News #2</CardTitle>
                                    <CardText className='c_txt'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card className='card ncard'>
                                <CardBody className='c_body'>
                                    <CardTitle className='c_title'>News #3</CardTitle>
                                    <CardText className='c_txt'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
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
                                                <span className='cat_span'>Medicine</span><span className='cat_span_count'>0</span>
                                            </div>
                                            <div>
                                                <span className='cat_span'>Pharmacy</span><span className='cat_span_count'>0</span>
                                            </div>
                                            <div>
                                                <span className='cat_span'>Uncategorized</span><span className='cat_span_count'>0</span>
                                            </div>
                                            <div>
                                                <span className='cat_span'>Doctors</span><span className='cat_span_count'>0</span>
                                            </div>
                                            <div>
                                                <span className='cat_span'>Innovations</span><span className='cat_span_count'>0</span>
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
                                            <select className='optmt_dropdown'>
                                                <option>Select an appointment</option>
                                                <option>Medicine</option>
                                                <option>Pharmacy</option>
                                                <option>Uncategorized</option>
                                                <option>Doctors</option>
                                                <option>Innovations</option>
                                            </select>
                                            <button type="button" class="btn btn-danger opt_btn">SUBMIT</button>
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