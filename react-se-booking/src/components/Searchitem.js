import React from "react";

const Searchitem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="suTitle">Tower Street Appartment</h1>
        <span className="siDistance">500m from canter</span>
        <span className="siTaxiOp">free Appartment with Air conditioning</span>
        <span className="siSubtitle">
          Studio Apartments with Air conditioning
        </span>
        <span className="siFeatures">
          Entre Studio - 1 bathroom - 21 square meters - 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="CancelOpSubtitle">
          You can cancel later, so look in this great price today !
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        <div className="siDetailsTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      
      
      </div>
    </div>
  );
};

export default Searchitem;
