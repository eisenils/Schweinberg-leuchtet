import React from "react";
import "./App.css";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

function App() {
  return (
    <div className="App">
      <h1>Schweinberg leuchtet</h1>
      <Gallery photos={photos} />
      <div>
        &copy; {new Date().getFullYear()} NE Design |{" "}
        <a href="http://www.nils-eisenhauer.de/impressum">Impressum</a>
      </div>
    </div>
  );
}

export default App;
