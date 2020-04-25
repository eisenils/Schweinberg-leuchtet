import React from "react";
import FullHeight from "react-full-height";
import video from "../hero.mp4";

function Hero() {
  return (
    <>
      <FullHeight className="hero-mobile d-md-none">
        {/* <div className="d-md-none hero-image" /> */}
        <div className="hero-text">
          <h1 className="neon m-5">
            Schweinberg <span style={{ color: "#e92efb" }}>leuchtet</span>
          </h1>
          <h3>powered by Get Your Sound</h3>
        </div>
      </FullHeight>
      <FullHeight className=" d-none d-md-block">
        <video autoPlay="autoplay" loop="loop" muted id="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1 className="neon m-5">
            Schweinberg <span style={{ color: "#e92efb" }}>leuchtet</span>
          </h1>
          <h3 className="subheader-text">powered by Get Your Sound</h3>
        </div>
      </FullHeight>
    </>
  );
}

export default Hero;
