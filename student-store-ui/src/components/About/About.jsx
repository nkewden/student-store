import * as React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="about-container">
        <div className="about-texts">
          <h3 className="about-header" >About</h3>
          <p className="about-text">
            The codepath student store offers great products at great prices
            from a great team and for a great cause.
          </p>
          <p className="about-text">
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place.
          </p>
          <p className="about-text">
            All proceeds go towards bringing high quality CS education to
            college students around the country.
          </p>
        </div>
        <div className="codepath-logo">
          <img
            className="logoPic"
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"
          />
        </div>
      </div>
    </div>
  );
}
