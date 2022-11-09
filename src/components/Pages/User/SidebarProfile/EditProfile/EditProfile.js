import React from 'react';
import { Link } from 'react-router-dom';

const EditProfile = () => {
    return (
        <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
            <form  className="card-body form pb-5">
                <h2 className='font-bold color-red text-center mb-4'>Login</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link className="label-text-alt link link-hover color-red">Forgot password?</Link>
                    </label>
                </div>
                <div className="form-control mt-2">
                    <input type="submit" className='btn' value="Login" />
                </div>
            </form>
        </div>
    );
};

export default EditProfile;