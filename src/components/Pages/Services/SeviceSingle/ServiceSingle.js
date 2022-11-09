import React, { useContext } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';
import { RiEBike2Line } from 'react-icons/ri';
import { BiCartAlt } from 'react-icons/bi';
import { Link, useLoaderData } from 'react-router-dom';
import './ServiceSingle.css';
import { AuthContext } from '../../../../context/AuthProvider';

const ServiceSingle = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData();
    const {title, image_url, rating, location, amenities, details} = service;
    return (
        <div>
            <div className="hero hero-service mb-3" style={{ backgroundImage: `url("${image_url}")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content ml-20 text-neutral-content">
                    <div className="my-16">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <div className='flex items-center text-xl font-semibold'>
                            <BsStarFill className='color-red mr-1'/><BsStarFill className='color-red mr-1'/><BsStarFill className='color-red mr-1'/><BsStarFill className='color-red mr-1'/><BsStarHalf className='color-red mr-2'/> {rating.number}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-24'>
                <div className='mt-10'>
                    <h2 className='font-semibold text-2xl'>Location</h2>
                    <div className='w-6/12 my-2'>
                        <div>{location}</div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='mb-2'>
                    <h2 className='font-semibold text-2xl mb-2'>Amenities</h2>
                    <div className='flex text-semibold text-md'>
                        <span className='flex items-center mr-10'><RiEBike2Line className='mr-2'/>{amenities.delivery}</span>
                        <span className='flex items-center'><BiCartAlt className='mr-2'/></span>{amenities.takeout}
                    </div>
                </div>
                <div className="divider"></div>
                <div className='mb-2'>
                    <h2 className='font-semibold text-2xl mb-3'>About the business</h2>
                    {details?.specialties && 
                    <div className='my-2'>
                        <h2 className='font-semibold text-md mb-2'>Specialties</h2>
                        {details.specialties}    
                    </div>}
                    {details?.history && 
                    <div className='my-2'>
                        <h2 className='font-semibold text-md mb-2'>History</h2>
                        {details.history}    
                    </div>}
                </div>
                <div className="divider"></div>
                <div>
                    <h2 className='font-semibold text-2xl mb-2'>Recommended Reviews</h2>
                    Reviews
                </div>
                <div className="divider"></div>
                <div>
                    <h2 className='font-semibold text-2xl my-3'>Add Reviews</h2>
                    {
                    user?.uid ? 
                    <form>
                        <div className="form-control mb-4 w-6/12">
                            <textarea className="textarea textarea-bordered" placeholder="Write review"></textarea>
                        </div>
                        <input type="submit" className='btn red-button' value="Submit review" />
                    </form>: 
                    <Link to="/login" className='btn red-button'>You must login to add a review</Link> 
                    
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceSingle;