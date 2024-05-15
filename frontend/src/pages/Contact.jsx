import React from 'react';
import image from '../components/images/contact/contact.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:grid md:grid-cols-2'>
      <div className=''>
        <img src={image} alt='' className='md:pb-20' />
      </div>
      <div className='text-xl pt-5'>
        <p>
          We value your feedback and inquiries. Please feel free to reach out to
          us with any questions, concerns, or feedback you may have. Our
          dedicated customer support team is here to assist you.
        </p>
        <br />
        <h1 className='text-3xl underline mb-3'>Customer Support Hours:</h1>
        Monday - Friday: 9:00 AM - 6:00 PM (IST)
        <br />
        Saturday - Sunday: Closed
        <h1 className='text-3xl underline my-3'>Contact Information:</h1>
        Phone: 1234567890
        <br />
        Email:
        <Link
          to='https://mail.google.com/mail/?view=cm&fs=1&to=foodyzzz@gmail.com'
          target='_blank'
        >
          foodyzzz@gmail.com
        </Link>
        <p className='text-4xl mt-4'>
          Thank you for choosing <b>FoodyZzz</b> We look forward to hearing from
          you!
        </p>
      </div>
    </div>
  );
};

export default About;
