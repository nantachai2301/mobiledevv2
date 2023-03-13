import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="featuredproperties">
      <div className="propertyItem">
        <img
          src="https://source.unsplash.com/500x500/?hotel&sig1"
          className="featuredpropertiesImg"
        />
        <div className="featuredpropertiesTitle">
          <h1>AparthotelStaerMlasto</h1>
          <h2>Madrid</h2>
          <h1>Starting from $120</h1>
          <button>8.9</button>&nbsp;&nbsp;&nbsp;
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredpropertiesItem">
        <img
          src="https://source.unsplash.com/500x500/?Hotels&sig1"
          className="featuredpropertiesImg"
        />
        <div className="featuredpropertiesTitle">
          <h1>Comfort Suites Airport</h1>
          <h2>Ausin</h2>
          <h1>Starting from $140</h1>
          <button>9.3</button>&nbsp;&nbsp;&nbsp;
          <span>Excellentional</span>
        </div>
      </div>
      <div className="featuredpropertiesItem">
        <img
          src="https://source.unsplash.com/500x500/?Hotel&sig1"
          className="featuredpropertiesImg"
        />
        <div className="featuredpropertiesTitle">
          <h1>Four Seasons Hotel</h1>
          <h2>Lisbon</h2>
          <h1>Starting from $99</h1>
          <button>8.8</button>&nbsp;&nbsp;&nbsp;
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredpropertiesItem">
        <img
          src="https://source.unsplash.com/500x500/?villas&sig1"
          className="featuredpropertiesImg"
        />
        <div className="featuredpropertiesTitle">
          <h1>Hilton Garden lnn</h1>
          <h2>Berlin</h2>
          <h1>Starting from $105</h1>
          <button>8.9</button>&nbsp;&nbsp;&nbsp;
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
