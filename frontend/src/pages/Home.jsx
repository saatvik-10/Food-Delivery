import React from "react";
import img1 from "../components/images/home/hfood.png";
import { Link } from "react-router-dom";
import Reviews from "../props/HomeProps/Reviews";

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row md:space-y-0 md:py-20">
        <div className="flex flex-col space-y-6 md:w-1/2 md:space-y-12">
          <h1 className="my-4 max-w-lg text-center text-5xl font-bold text-orange-600 md:my-0 md:text-left md:text-8xl">
            FoodyZzz...
          </h1>
          <p className="max-w-xl text-start text-lg font-semibold text-blue-500 md:text-left md:text-2xl">
            "Discover the ease of gourmet dining from home! Browse our curated
            menu and indulge in a feast of flavors delivered straight to your
            doorstep. From mouthwatering entrees to decadent desserts, elevate
            your dining experience with our convenient food delivery service.
            Order now and let us bring the restaurant experience to you!"
          </p>
          <p className="text-center text-xl font-semibold text-black hover:scale-110 md:text-start md:text-2xl lg:text-3xl">
            <Link to="/menu">Click here to order yours now !</Link>
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="">
        <span className="mb-14 flex items-center justify-center text-center text-2xl font-semibold text-red-600 md:text-6xl">
          From Our Regulars
        </span>
        <Reviews />
      </div>
    </div>
  );
}
