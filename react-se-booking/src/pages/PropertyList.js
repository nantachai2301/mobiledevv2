import React from "react";

const PropertyList = () => {
  return (
    <div className="propertyList">
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?Hotels&sig1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Hotels</h1>
          <h2>14,000 properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?Appartment&sig1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Appartmentd</h1>
          <h2>15,000 properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?Resort&sig1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Resort</h1>
          <h2>16,000 properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?villas&sig1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>villas</h1>
          <h2>17,000 properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?Cabins&sig1"
          className="propertyImg"
        />
        <div className="propertyTitle">
          <h1>Cabins</h1>
          <h2>18,000 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
