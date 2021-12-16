import React, { Component } from "react";

class Countdown extends Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 19, 2021 18:15:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(() => {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is over
      if (distance <= 0) {
        clearInterval(x);
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      }

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
    // If the count down is over
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col mt-5 text-center">
              <h2>Countdown</h2>
              <p id="demo" />
              <div>
                <div className="countdown-wrapper">
                  <div className="countdown-item">
                    {days}
                    <span>Tage</span>
                  </div>
                  <div className="countdown-item">
                    {hours}
                    <span>Stunden</span>
                  </div>
                  <div className="countdown-item">
                    {minutes}
                    <span>Minuten</span>
                  </div>
                  <div className="countdown-item">
                    {seconds}
                    <span>Sekunden</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Countdown;
