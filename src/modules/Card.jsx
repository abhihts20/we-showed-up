import React from "react";

const Card = (props) => {

  return (
    <div className="card">
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          {props.name}
        </p>
        <a href="#" className="btn btn-primary">
          Go to Store
        </a>
      </div>
    </div>
  );
};

export default Card;
