import React from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Impressions from "./components/Impressions";

function App() {
  return (
    <>
      <Hero />
      <Countdown />
      <About />
      <Impressions />
      <div className="text-center mt-3 mb-3" style={{ fontSize: "1.2rem" }}>
        &copy; {new Date().getFullYear()} NE Design |{" "}
        <a href="http://www.nils-eisenhauer.de/impressum" className="text-decoration-none">
          Impressum
        </a>
      </div>
    </>
  );
}

export default App;
