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
          <p>powered by Get Your Sound</p>
        </div>
      </FullHeight>
      {/* <FullHeight className=" d-none d-md-block parent"> */}
      <div className="parent">
        <video autoPlay="autoplay" loop="loop" muted id="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-text">
        <h1 className="neon m-5">
          Schweinberg <span style={{ color: "#e92efb" }}>leuchtet</span>
        </h1>
        <p>powered by Get Your Sound</p>
      </div>
      {/* </FullHeight> */}
      {/* <div className="d-none d-md-block">
        <video autoPlay="autoplay" loop="loop" muted id="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </>
  );
}

export default Hero;
