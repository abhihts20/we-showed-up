import React from "react";
import homeImage from "../images/home_image_one.png";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <section id="banner">
        <div
          className="container"
        >
          <div className="row">
            <div className="col-md-12 col-lg-6 col-sm-12 order-lg-1 order-2">
              <p className="promo-title">
                Grow your business with
                <h2 className="brand-name">WE SHOWED UP</h2>
              </p>

              <p>
                We are a group of enthusiastic and crazy developers who provides
                an IT solution for your Business
              </p>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-6 text-center order-lg-2 order-1">
              <img
                src={homeImage}
                alt="home image"
                className="img-fluid animated"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
