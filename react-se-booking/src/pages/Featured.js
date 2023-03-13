import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://source.unsplash.com/500x500/?Bangkok&sig1"
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>Bangkok</h1>
          <h2>12,000 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://source.unsplash.com/500x500/?paris&sig1"
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>paris</h1>
          <h2>14,000 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://source.unsplash.com/500x500/?Tokyo&sig1"
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>Tokyo</h1>
          <h2>30,000 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://source.unsplash.com/500x500/?Newzealand&sig1"
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>Newzealand</h1>
          <h2>52,000 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
