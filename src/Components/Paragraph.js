import React from 'react';
import './demo.css'
import { Slide } from 'react-slideshow-image';


const slideImages = [
'images/card1.jpg',
'images/card2.jpg',
'images/card3.jpg'
];

const properties = {
duration: 5000,
transitionDuration: 500,
infinite: true,
indicators: true,
arrows: true
}

const Slideshow = () => {
return (
<div className='row'>
<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
<Slide {...properties}>
<div className="each-slide">
<div>
<div><h1 className='slideparahead'>PARAGRAPH #1</h1></div>
<p className='slidepara'>During the Middle Ages, hospitals served different functions from modern institutions. Middle Ages 
hospitals were almshouses for the poor, hostels for pilgrims, or hospital schools. 
The word "hospital" comes from the Latin hospes, signifying a stranger or foreigner, hence a guest. 
Another noun derived from this, hospitium came to signify hospitality, that is the relation between 
guest and shelterer, hospitality, friendliness, and hospitable reception.</p>
</div>
</div>
<div className="each-slide">
<div>
<div><h1 className='slideparahead'>PARAGRAPH #2</h1></div>
<p className='slidepara'>During the Middle Ages, hospitals served different functions from modern institutions. Middle Ages 
hospitals were almshouses for the poor, hostels for pilgrims, or hospital schools. 
The word "hospital" comes from the Latin hospes, signifying a stranger or foreigner, hence a guest. 
Another noun derived from this, hospitium came to signify hospitality, that is the relation between 
guest and shelterer, hospitality, friendliness, and hospitable reception.</p>
</div>
</div>
<div className="each-slide">
<div>
<div><h1 className='slideparahead'>PARAGRAPH #3</h1></div>
<p className='slidepara'>During the Middle Ages, hospitals served different functions from modern institutions. Middle Ages 
hospitals were almshouses for the poor, hostels for pilgrims, or hospital schools. 
The word "hospital" comes from the Latin hospes, signifying a stranger or foreigner, hence a guest. 
Another noun derived from this, hospitium came to signify hospitality, that is the relation between 
guest and shelterer, hospitality, friendliness, and hospitable reception.</p>
</div>
</div>
<div className="each-slide">
<div>
<div><h1 className='slideparahead'>PARAGRAPH #4</h1></div>
<p className='slidepara'>During the Middle Ages, hospitals served different functions from modern institutions. Middle Ages 
hospitals were almshouses for the poor, hostels for pilgrims, or hospital schools. 
The word "hospital" comes from the Latin hospes, signifying a stranger or foreigner, hence a guest. 
Another noun derived from this, hospitium came to signify hospitality, that is the relation between 
guest and shelterer, hospitality, friendliness, and hospitable reception.</p>
</div>
</div>
</Slide>
</div>
<div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'></div>
</div>
)
}
export default Slideshow;