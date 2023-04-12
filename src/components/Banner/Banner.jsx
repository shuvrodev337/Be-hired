import React from 'react';
import personImg from '../../assets/confident-stylish-handsome-young-businessman-adjusting-necktie-looking-camera.jpg'
const Banner = () => {
    return (
        <div className='space-y-6 md:grid grid-cols-2 mx-auto px-4 py-10 gap-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 items-center'>
            <div className='space-y-6 '>
            <h3 className='text-6xl font-bold'>One Step<br></br>Closer To Your<br></br> <span className='text-purple-700'>Dream Job</span></h3>
            <p className='text-base text-gray-700'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Land your dream job.</p>
            <button className='btn-primary'>Get Started</button>
            </div>
            <div>
                <img className='w-full rounded-xl' src={personImg} alt="person-image" />
            </div>
        </div>
    );
};

export default Banner;