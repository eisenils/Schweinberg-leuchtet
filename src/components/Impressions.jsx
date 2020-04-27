import React from "react";

import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import video from "../images/hero.mp4";
import {
  Player,
  ControlBar,
  BigPlayButton,
  CurrentTimeDisplay,
  TimeDivider,
  LoadingSpinner,
  VolumeMenuButton,
} from "video-react";

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
          <div className="col-8 offset-2">
            <Player poster="/assets/poster.png">
              <source src={video} />
              <LoadingSpinner />

              <BigPlayButton position="center" />
              <ControlBar>
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <VolumeMenuButton />
              </ControlBar>
            </Player>
          </div>
        </div>
      </div>
    </>
  );
}

export default Impressions;
