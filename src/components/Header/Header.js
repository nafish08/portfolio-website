import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li><Link className='uppercase' to='/projectDetails'>Projects</Link></li>
        <li><a className='uppercase' href='#aboutMe'>About Me</a></li>
        <li><Link className='uppercase' to='/blogs'>Blogs</Link></li>
        <li><a className='uppercase' href='home#contactMe'>Contact Me</a></li>
        <li><button className='btn btn-primary uppercase'><a href='https://drive.google.com/file/d/1b_q8eZSXMGgtwFvUvmcL_JcJvddfB-VX/view?usp=sharing' target='_blank' download>Download Resume</a></button></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">PORTFOLIO</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;