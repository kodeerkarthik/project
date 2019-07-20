import React, { Component } from 'react';
import '../Css/Slideshow.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
class Slideshow extends Component { 
    render() {

        return (
            <div className='slidebody'>
                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={10}
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1">
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide1.jpg')} alt="First slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide2.png')} alt="Second slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide3.jpg')} alt="Third slide"/>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide4.jpg')} alt="First slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="5">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide5.jpg')} alt="First slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="6">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide6.jpg')} alt="First slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="7">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide7.jpg')} alt="First slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="8">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide8.png')} alt="First slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="9">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide9.jpg')} alt="First slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="10">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../Images/slide10.jpg')} alt="First slide" />
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        );
    }
}

export default Slideshow;