import React from "react";

import Gallery from "react-photo-gallery";
import { photos } from "./photos";

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
            <div className="video-container">
              <iframe
                title="video"
                src="https://www.youtube.com/embed/T4PCj9BKJTY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Impressions;
