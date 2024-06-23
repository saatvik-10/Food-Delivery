import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="container flex h-[100svh] items-center justify-center overflow-y-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
