import React from "react";
import FullHeight from "react-full-height";
import video from "../images/hero.mp4";

function Hero() {
  return (
    <>
      <FullHeight className="hero-mobile d-md-none">
        <div className="hero-text">
          <h1 className="neon m-5">
            Schweinberg <span style={{ color: "#e92efb" }}>leuchtet</span>
          </h1>
          <h3 className="subheader-text">
            <span style={{ fontSize: "1.3rem" }}>powered by</span>
            <br /> <strong>GetYourSound</strong>
          </h3>
        </div>
      </FullHeight>
      <FullHeight className=" d-none d-md-block">
        <video autoPlay="autoplay" loop="loop" muted id="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1 className="neon m-5" style={{ fontSize: "3.5rem" }}>
            Schweinberg <span style={{ color: "#e92efb" }}>leuchtet</span>
          </h1>
          <h3 className="subheader-text">
            <span style={{ fontSize: "1.3rem" }}>powered by</span>
            <strong className="ml-2">GetYourSound</strong>
          </h3>
        </div>
      </FullHeight>
    </>
  );
}

export default Hero;
