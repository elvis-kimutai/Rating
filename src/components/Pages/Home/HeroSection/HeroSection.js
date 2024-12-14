import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../assets/images/havenhp2.jpg';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero home-hero text-start ml-0" style={{ backgroundImage: `url("${image}")`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content ml-20 my-28 text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Discover Ireland’s most iconic pubs and local favorites</h1>
                    <p className="mb-5">Raise a glass to the spirit of Ireland</p>
                    <Link to="/signup" className="btn">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;