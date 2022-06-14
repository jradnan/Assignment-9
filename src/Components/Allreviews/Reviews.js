import React from 'react';
import './Reviews.css'

const Reviews = () => {
    return (
        <div>
            <h1 style={{margin:'60px 0px'}}>What Our Customer Say !!!</h1>
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
                <div className="card review">
                    <h4>Luria</h4>
                    <i>Ratings:  5*</i>
                    <p className='writing'>Loving it so far. Everything I was expecting and then some. Very durable. I’ve been rough on it, as you might be able to see from the photos</p>
                </div>
                <div className="card review">
                    <h4>Lakshmi</h4>
                    <i>Ratings:  4.8*</i>
                    <p className='writing'>This watch is great. I have only had It one day, but it is a great upgrade from Apple Watch 3 & 5. 
                    The band is much and easier to secure to your wrist. All the watches i had were easy to set up but this one was faster
                    Larger face is a plus. Overall very happy I upgraded.</p>
                </div>
                <div className="card review">
                    <h4>Franco</h4>
                    <i>Ratings:  5*</i>
                    <p className='writing'>This was purchased for my wife, whom had resisted to an Apple Watch.  Her Fitbit was starting to not record so she agreed to the Apple Watch.  She is very pleased with it.   She has noted multiple phone calls she would have missed except for the Apple Watch</p>
                </div>

            </div> 
        </div>
    );
};

export default Reviews;