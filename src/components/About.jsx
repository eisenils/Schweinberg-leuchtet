import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <h2>Über die Aktion </h2>
              <p>
                Schweinberg leuchtet ist eine Aktion, die von{" "}
                <a href="http://get-your-sound.de/" className="text-decoration-none">
                  GetYourSound
                </a>{" "}
                ins Leben gerufen wurde. Am 17. April 2020 wurde zum ersten Mal die Burgruine sowie
                die Wehranlage in Schweinberg in einer Lichtshow inszeniert.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
