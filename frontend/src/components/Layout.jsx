import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const loginPath = "/login";
  const registerPath = "/register";
  const fPswdConPath = "/forgot-password-confirmation";

  return (
    <div className="">
      {location.pathname === loginPath ? (
        <span className="mt-24 flex items-center justify-center text-center font-serif text-3xl font-bold text-red-700 md:text-5xl">
          WELCOME BACK! LOGIN TO RELISH YOUR FAVORITES
        </span>
      ) : location.pathname === registerPath ? (
        <span className="mt-8 flex items-center justify-center text-center font-serif text-3xl font-bold text-red-700 md:text-5xl">
          JOIN US AND SAVOUR THE FLAVOUR!
        </span>
      ) : location.pathname === fPswdConPath ? (
        ""
      ) : (
        <Header />
      )}

      <div className="container flex overflow-y-hidden py-24">{children}</div>
      {location.pathname !== loginPath &&
        location.pathname !== registerPath &&
        location.pathname !== fPswdConPath && <Footer />}
    </div>
  );
};

export default Layout;
