import React from 'react';
import image from '../../../../assets/images/foodmonster-banner.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero home-hero text-start ml-0" style={{ backgroundImage: `url("${image}")`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content ml-20 my-28 text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Food delivery from our best restaurants</h1>
                    <p className="mb-5">The meals you love, delivered with care</p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;