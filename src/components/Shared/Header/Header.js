import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../logo.png';
import avatar from '../../../assets/images/user.png';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar px-6 py-4 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="color-red lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to="/services"><li>Services</li></NavLink>
                        <NavLink to="/blog"><li>Blog</li></NavLink>
                        <NavLink to="/contact"><li>Contact Us</li></NavLink>
                    </ul>
                </div>
                <div className='flex'>
                    <img className='ml-3 lg:ml-0' src={logo} alt="" />
                    <NavLink className="btn btn-ghost color-red font-bold text-xl lg:text-2xl">Food Monster</NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <NavLink to="/" className='mr-4 font-semibold'><li>Home</li></NavLink>
                    <NavLink to="/services" className='mr-4 font-semibold'><li>Services</li></NavLink>
                    <NavLink to="/blog" className='mr-4 font-semibold'><li>Blog</li></NavLink>
                    <NavLink to="/contact" className='font-semibold'><li>Contact Us</li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={avatar} alt="User" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <NavLink className="justify-between bg-transparent text-black">
                        Profile
                        <span className="badge">New</span>
                    </NavLink>
                    </li>
                    <li><NavLink className="bg-transparent text-black">Settings</NavLink></li>
                    <li><NavLink className="bg-transparent text-black">Logout</NavLink></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;