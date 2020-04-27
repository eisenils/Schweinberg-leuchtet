import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Impressions from "./components/Impressions";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Impressions />
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} NE Design |{" "}
          <a href="http://www.nils-eisenhauer.de/impressum" className="text-decoration-none">
            Impressum
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
