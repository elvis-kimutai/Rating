import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/register.jpg';
import { FcGoogle } from "react-icons/fc";
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center my-16 mx-5'>
            <div className='w-full md:w-6/12'>
                <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
                    <form className="card-body form pb-5">
                        <h2 className='font-bold color-red text-center mb-4'>Create an account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn' value="Sign Up" />
                        </div>
                    </form>
                    <div className='flex justify-center mb-5'>
                        <Link className='social-login  ml-3 flex items-center'>
                        <FcGoogle className='mr-3'/>
                        Continue with Google
                        </Link>
                    </div>
                    <div className='mx-auto mb-5'>
                        <p>Already have an account? <Link to="/login" className='color-red'>Login here</Link></p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-6/12">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default SignUp;