import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const Layout = ({ children }) => {
  const location = useLocation();
  const loginPath = "/login";
  const registerPath = "/register";
  const fPswdConPath = "/forgot-password-confirmation";
  const rPswd = "/reset-password";
  const profile = "/profile";

  const [loading, setLoading] = useState(0);
  const [page, setPage] = useState(true);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setLoading(10), 500),
      setTimeout(() => setLoading(40), 1000),
      setTimeout(() => setLoading(100), 2000),
      setTimeout(() => {
        setPage((page) => !page);
      }, 2500),
    ];

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  if (page) {
    return (
      <LoadingBar
        color="#0000FF"
        progress={loading}
        onLoaderFinished={() => setLoading(0)}
      />
    );
  } else {
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
        ) : location.pathname === rPswd ? (
          ""
        ) : location.pathname === profile ? (
          ""
        ) : (
          <Header />
        )}
        <div className="container flex overflow-y-hidden py-24">{children}</div>
        {location.pathname !== loginPath &&
          location.pathname !== registerPath &&
          location.pathname !== fPswdConPath &&
          location.pathname !== rPswd &&
          location.pathname !== profile && <Footer />}
      </div>
    );
  }
};
export default Layout;
