import React from "react";
import image from "../components/images/contact/contact.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container flex flex-col items-center justify-center pt-10 md:space-y-0 md:pt-0">
      <div className="">
        <img src={image} alt="" className="md:h-60" />
      </div>
      <div className="text-xl">
        <p className="mb-2 text-lg md:text-2xl">
          We value your feedback and inquiries. Please feel free to reach out to
          us with any questions, concerns, or feedback you may have. Our
          dedicated customer support team is here to assist you.
        </p>
        <h1 className="mb-1 text-xl font-medium md:text-3xl">
          Customer Support Hours:
        </h1>
        <span className="text-base md:text-xl">
          Monday - Saturday: 9:00 AM - 10:00 PM
        </span>
        <br />
        <span className="text-base md:text-xl">Closed on Sunday</span>
        <h1 className="my-2 text-xl font-medium md:text-3xl">
          Contact Information:
        </h1>
        <span className="text-base md:text-xl">Phone: 1234567890</span>
        <br />
        <span className="text-base md:text-xl">Email:</span>
        <Link
          to="https://mail.google.com/mail/?view=cm&fs=1&to=foodyzzz@gmail.com"
          target="_blank"
          className="text-base underline md:text-xl"
        >
          foodyzzz@gmail.com
        </Link>
        <p className="mt-4 text-center text-xl md:text-4xl">
          Thank you for choosing <b className="text-orange-600">FoodyZzz</b>. We
          look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default About;
