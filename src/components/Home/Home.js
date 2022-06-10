import React from 'react';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello! I'm <br /> I am Md. Nafish Sadik</h1>
                        <p className="mb-5">Front-end/Back-end developer.</p>
                        <button className="btn btn-primary"><a href='https://drive.google.com/file/d/1b_q8eZSXMGgtwFvUvmcL_JcJvddfB-VX/view?usp=sharing' target='_blank' download>Download Resume</a></button>
                    </div>
                </div>
            </div>
            <Projects></Projects>
        </div>
    );
};

export default Home;