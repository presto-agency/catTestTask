import React from "react";
import {Helmet} from "react-helmet";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({
    children,
    title = "CatTestTask"
  }) => {
  return (
    <>
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
      <div
        className={title === "Home page"
        ? "wrapper active"
        : "wrapper"
      }>
        <Header title={title}/>
        <div className="root"></div>
        {children}
        {title === "Checkout" && <Footer/>}
      </div>
    </>
  )
}

export default Layout;