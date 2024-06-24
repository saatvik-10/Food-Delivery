import React from "react";
import image from "../components/images/about/about.jpg";

const About = () => {
  return (
    <div className="container flex flex-col items-center justify-center pt-20 md:space-y-0 md:pt-0">
      <div className="">
        <img src={image} alt="" className="md:mb-4 md:h-80" />
      </div>
      <div className="">
        <p className="mb-6 text-sm md:text-3xl">
          Welcome to
          <b className="text-xl text-orange-600 md:text-4xl"> FoodyZzz</b>,
          where passion for food meets convenience. We are a dedicated team
          committed to bringing delicious flavors and culinary delights straight
          to your doorstep. With a deep-rooted love for exceptional food and a
          desire to elevate your dining experience, we strive to make every meal
          a memorable one.
        </p>
        <p className="mb-6 text-sm md:text-3xl">
          At <b className="text-xl text-orange-600 md:text-4xl">FoodyZzz</b>, we
          understand the importance of convenience without compromising on
          quality. Whether you're craving comforting classics or exploring new
          culinary adventures, our diverse menu curated by talented chefs has
          something for everyone.
        </p>
        <p className="mb-6 text-sm md:text-3xl">
          With a focus on customer satisfaction and culinary excellence, we aim
          to exceed your expectations with every order. Join us on a journey of
          flavor discovery and let us redefine the way you experience food
          delivery.
        </p>
        <p className="mb-6 text-sm md:text-3xl">
          Experience the difference with
          <b className="text-xl text-orange-600 md:text-4xl"> FoodyZzz</b> -
          where every bite tells a story, and every meal is an experience to
          savor.
        </p>
      </div>
    </div>
  );
};

export default About;
