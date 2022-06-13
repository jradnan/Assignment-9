import React from 'react';
import './CustomarReview.css'

const CustomarReview = () => {
    return (
        <div style={{marginTop:'120px'}}>
            <h1>Customer Reviews (3)</h1>
            <div className='customer'>
                <div className="card review">
                    <h4>Haytham</h4>
                    <i>Ratings:  4.9*</i>
                    <p className='writing'>This is my first apple watch gps . I never have any issue ! I so love it becuase im deaf i cang hear alarm but this watch has vibrate im so thankful for it . Its nice smoothly and wasy pin find my phone too it help and its so awesome to use this watch i promise you !.</p>
                </div>
                <div className="card review">
                    <h4>Wasim</h4>
                    <i>Ratings:  4.8*</i>
                    <p className='writing'>It’s okay. I wish Apple would add a more comprehensive sleep app like FitBit-measures AND grades your sleep AND breaks down your sleep. Apple Watch just tells you how long you’ve slept. FitbBit Sense’s battery life is much longer too.</p>
                </div>
                <div className="card review">
                    <h4>Edward</h4>
                    <i>Ratings:  5*</i>
                    <p className='writing'>Apple Watch series 7 is a great watch.  It has the ability to set a timer to make sure that you wash your hands for at least 20 seconds.  My watch face is showing me the date, Uv index, temperature, and the option to check my blood oxygen levels.</p>
                </div>

            </div>
            
        </div>
    );
};

export default CustomarReview;