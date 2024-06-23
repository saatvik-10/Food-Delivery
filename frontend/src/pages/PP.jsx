import React from 'react';
import img from '../components/images/pp/pp.svg';

const PP = () => {
  return (
    <div className='container flex flex-col items-center px-6 mx-auto my-5 md:space-y-0'>
      <div className=''>
        <img src={img} alt='' className='mb-4 h-56' />
      </div>
      <div className=''>
        <h2 className='text-3xl font-medium mb-2'>Privacy Policy</h2>
        <p className='mb-3'>
          At <b className='text-orange-600 text-xl'>FoodyZzz</b>, we are committed to protecting your privacy and
          ensuring the security of your personal information.
        </p>
        <h2 className='text-3xl font-medium mb-3'>Information We Collect:</h2>
        <p>
          <ul className='mb-3 list-disc'>
            <li>
              <b>Personal Information:</b> When you place an order or register
              an account on our website, we may collect personal information
              such as your name, email address, phone number, and delivery
              address.
            </li>
            <li>
              <b>Payment Information:</b> To process your orders, we collect
              payment details such as credit card numbers or other payment
              methods.
            </li>
            <li>
              <b>Usage Data:</b> We may collect information about your
              interactions with our website, including the pages you visit, the
              products you view, and your preferences.
            </li>
          </ul>
        </p>
        <h2 className='text-3xl font-medium mb-3'>Your Rights:</h2>

        <p className='mb-3'>
          You have the right to access, update, or delete your personal
          information. Contact us if you have any concerns.
        </p>
        <h2 className='text-3xl font-medium mb-3'>Changes to This Policy:</h2>
        <p>
          We may update our Privacy Policy periodically. Check this page for the
          latest information. By using our website, you agree to the terms
          outlined in this Privacy Policy.
          <br className='mb-1' />
          Last Updated: <b>May 15, 2024</b>
        </p>
      </div>
    </div>
  );
};

export default PP;
