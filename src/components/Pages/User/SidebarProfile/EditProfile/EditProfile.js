import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthProvider';

const EditProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
            <form  className="card-body form pb-5">
                <h2 className='font-semibold mb-4 ml-1'>Edit profile</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Edit Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' defaultValue={user?.email && user?.email} placeholder="email" className="input input-bordered" readOnly/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Profile Image Link</span>
                    </label>
                    <input type="text" name='profile-image' placeholder="Profile image link" className="input input-bordered" />
                </div>
                <div className="form-control mt-4">
                    <input type="submit" className='btn' value="Update Profile" />
                </div>
            </form>
        </div>
    );
};

export default EditProfile;