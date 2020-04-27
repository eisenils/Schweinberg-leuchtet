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
    </>
  );
}

export default Impressions;
