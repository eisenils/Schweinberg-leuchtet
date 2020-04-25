import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
// import Gallery from "react-photo-gallery";
// import { photos } from "./photos";

function App() {
  return (
    <>
      <Hero />
      <About />
      {/* <Gallery photos={photos} /> */}
      <div className="text-center">
        &copy; {new Date().getFullYear()} NE Design |{" "}
        <a href="http://www.nils-eisenhauer.de/impressum">Impressum</a>
      </div>
    </>
  );
}

export default App;
