import React from 'react';
import img1 from '../components/images/home/hfood.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className='container flex flex-col-reverse justify-center items-center h-[78vh] px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-lg text-4xl text-orange-600 font-bold text-center md:text-8xl md:text-left'>
            FoodyZzz...
          </h1>
          <p className='max-w-xl text-center font-semibold text-xl text-blue-500 md:text-left'>
            "Discover the ease of gourmet dining from home! Browse our curated
            menu and indulge in a feast of flavors delivered straight to your
            doorstep. From mouthwatering entrees to decadent desserts, elevate
            your dining experience with our convenient food delivery service.
            Order now and let us bring the restaurant experience to you!"
          </p>
          <p className='text-black text-3xl font-semibold hover:scale-110'>
            <Link to='#'>Click here to order yours now !</Link>
          </p>
        </div>
        <div className='md:w-1/2 md:pb-20'>
          <img src={img1} />
        </div>
      </div>
    </div>
  );
}
