import React from 'react';
import image from '../components/images/about/about.jpg';

const About = () => {
  return (
    <div className='container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:grid md:grid-cols-2'>
      <div className=''>
        <img src={image} alt='' className='pb-20' />
      </div>
      <div className='text-xl pt-5'>
        <p>
          Welcome to <b>FoodyZzz</b>, where passion for food meets convenience.
          We are a dedicated team committed to bringing delicious flavors and
          culinary delights straight to your doorstep. With a deep-rooted love
          for exceptional food and a desire to elevate your dining experience,
          we strive to make every meal a memorable one.
        </p>
        <br />
        <p>
          At <b>FoodyZzz</b>, we understand the importance of convenience
          without compromising on quality. Whether you're craving comforting
          classics or exploring new culinary adventures, our diverse menu
          curated by talented chefs has something for everyone.
        </p>
        <br />
        <p>
          With a focus on customer satisfaction and culinary excellence, we aim
          to exceed your expectations with every order. Join us on a journey of
          flavor discovery and let us redefine the way you experience food
          delivery.
        </p>
        <br />
        <p>
          Experience the difference with <b>FoodyZzz</b> - where every bite
          tells a story, and every meal is an experience to savor.
        </p>
      </div>
    </div>
  );
};

export default About;
