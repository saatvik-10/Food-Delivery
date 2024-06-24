import React from "react";
import img from "../components/images/pp/pp.svg";

const PP = () => {
  return (
    <div className="container flex flex-col items-center justify-center pt-24 md:space-y-0 md:pt-0">
      <div className="">
        <img src={img} alt="" className="mb-2 hidden h-56 md:block" />
      </div>
      <div className="">
        <h2 className="mb-1 text-2xl font-bold md:text-3xl">Privacy Policy</h2>
        <p className="mb-3 text-sm md:text-base">
          At <b className="text-xl text-orange-600">FoodyZzz</b>, we are
          committed to protecting your privacy and ensuring the security of your
          personal information.
        </p>
        <h2 className="mb-1 text-lg font-bold md:text-3xl">
          Information We Collect:
        </h2>
        <p>
          <ul className="mb-3 list-disc">
            <li className="text-sm md:text-base">
              <b className="">Personal Information:</b> When you place an order
              or register an account on our website, we may collect personal
              information such as your name, email address, phone number, and
              delivery address.
            </li>
            <li className="text-sm md:text-base">
              <b className="">Payment Information:</b> To process your orders,
              we collect payment details such as credit card numbers or other
              payment methods.
            </li>
            <li className="text-sm md:text-base">
              <b className="">Usage Data:</b> We may collect information about
              your interactions with our website, including the pages you visit,
              the products you view, and your preferences.
            </li>
          </ul>
        </p>
        <h2 className="mb-1 text-lg font-bold md:text-3xl">Your Rights:</h2>

        <p className="mb-3 text-sm md:text-base">
          You have the right to access, update, or delete your personal
          information. Contact us if you have any concerns.
        </p>
        <h2 className="mb-1 text-lg font-bold md:text-3xl">
          Changes to This Policy:
        </h2>
        <p className="text-sm md:text-base">
          We may update our Privacy Policy periodically. By using our website,
          you agree to the terms outlined in this Privacy Policy.
          <br className="mb-1" />
          Last Updated: <b>May 15, 2024</b>
        </p>
      </div>
    </div>
  );
};

export default PP;
