import React from 'react';
import './Home.css'
import img from '../../../Image/applewatch.jpg'
import CustomarReview from '../../CustomarReview/CustomarReview';


const Home = () => {
    return (
        <div >
            <div className='section-container'>
            <div className="left-content">
                <h1>Apple Series 7</h1>
                <p>Largest, most advanced display yet.The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking.</p>
            </div>


            <div className="right-content">
               <img src={img} alt="" />
            </div>
            </div>
            
            <CustomarReview></CustomarReview>
        </div>
        
    );
};

export default Home;