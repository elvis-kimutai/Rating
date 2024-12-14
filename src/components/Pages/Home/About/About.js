import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-14 m-16'>
            <div className="card bg-base-100 shadow-xl items-center" style={{ backgroundColor: `#efefed`}}>
                <div className="card-body w-full md:w-10/12">
                    <h2 className="card-title mx-auto text-2xl mb-3">Are You A Local Pub?</h2>
                    <p className='text-center mb-5'> Discover, Rate, and Share Your Favorite Pubs!</p>
                    <div className="card-actions justify-center">
                    <button className="w-full btn">Rate your favourite Pub</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl items-center" style={{ backgroundColor: `#efefed`}}>
                <div className="card-body w-full md:w-10/12">
                    <h2 className="card-title mx-auto text-2xl mb-3">About pub Rating</h2>
                    <p className='text-center mb-5'>Finding local pubs in Ireland is easy with Pubs-Ireland. 
                        Search our website to instantly connect with the best local pubs!.</p>
                    <div className="card-actions justify-center">
                    <button className="w-full btn">Get listed today</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
