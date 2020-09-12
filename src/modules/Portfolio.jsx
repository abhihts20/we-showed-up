import React from "react";
import Pdata from "./Pdata";
import Card from "./Card";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <h1
          style={{ textAlign: "center", marginBottom: "5%", marginTop: "4%" }}
        >
          Check out some of our work
        </h1>
        <div className="row">
          {Pdata.map((data, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" style={{marginBottom:'1%'}}>
              <Card key={index} image={data.imgSrc} name={data.prodName} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
