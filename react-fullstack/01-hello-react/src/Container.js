import React from "react";
import Header from "./Header";
import Content from "./Content.js";
import Footer from "./Footer";

const container = () => {
  return (
    <div>
      <Header />
      <hr />
      <Content />
      <hr />
      <Footer />
    </div>
  );
};

export default container;
