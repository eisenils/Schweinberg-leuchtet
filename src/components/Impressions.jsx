import React from "react";

import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import video from "../images/hero.mp4";

function Impressions() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Impressionen</h2>
          </div>
        </div>
      </div>
      <Gallery photos={photos} />
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <video width="100%" height="auto" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Impressions;
