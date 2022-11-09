import React from 'react';
import SidebarProfile from '../SidebarProfile/SidebarProfile';
import UserDetails from '../UserDetails/UserDetails';
import UserPageBanner from '../UserPageBanner/UserPageBanner';

const Profile = () => {
    return (
        <div>
            <UserPageBanner></UserPageBanner>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-3/12'>
                    <SidebarProfile></SidebarProfile>
                </div>
                <div className='w-full md:w-9/12 bg-lime-600'>
                    <UserDetails></UserDetails>
                </div> 
            </div>
        </div>
    );
};

export default Profile;