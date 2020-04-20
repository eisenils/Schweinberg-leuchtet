import React from "react";
import "./App.css";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

function App() {
  return (
    <div className="App">
      <h1 className="neon m-5">
        Schweinberg <span style={{ color: "#e92efb" }}>leuchtet</span>
      </h1>
      <Gallery photos={photos} />
      <div className="text-center">
        &copy; {new Date().getFullYear()} NE Design |{" "}
        <a href="http://www.nils-eisenhauer.de/impressum">Impressum</a>
      </div>
    </div>
  );
}

export default App;
