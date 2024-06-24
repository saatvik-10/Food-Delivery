import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="container flex overflow-y-hidden py-24">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
