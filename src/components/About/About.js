import React from 'react';

const About = () => {
    return (
        <div className='mx-10'>
            <h2 className='text-5xl uppercase font-bold text-center py-6'>About Me</h2>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='flex justify-center items-center'>
                    <p className='text-2xl'>Web developer capable of learning and collaborating in
                        fast changing contexts and compositions. I put in a lot of
                        time at BootCamp, learning JavaScript, Node.js, React.js,
                        and MongoDB. Willing to take on web development/design problems
                        in order to have a long-term influence on the user experience.
                        In web development, I'm always learning new things. By doing so,
                        I will be able to benefit your team. Aside from that, I am a dedicated and
                        creative individual.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src='https://i.ibb.co/wLwH6jC/profile-pic.png' className='max-w-sm rounded-lg shadow-2xl' />
                </div>
            </div>
        </div>
    );
};

export default About;