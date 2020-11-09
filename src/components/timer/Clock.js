import React, { Component } from "react";

import styled from "styled-components";
var moment = require("moment");
moment().format();

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.getTimeUntil(this.props.deadline);
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leadingZero(num) {
    return num < 10 ? "0" + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    // console.log(this.state);
    return (
      <ClockWrapper>
        <div className="clock">
          <div>{this.leadingZero(this.state.days)} <div>days</div></div>
          <div>{this.leadingZero(this.state.hours)} <div>hours</div></div>
          <div>{this.leadingZero(this.state.minutes)} <div>minutes</div></div>
          <div>{this.leadingZero(this.state.seconds)} <div>seconds</div></div>
        </div>
      </ClockWrapper>
    );
  }
}

const ClockWrapper = styled.div`
  .clock {
    display: flex;
    justify-content: space-evenly;
  }
`;
export default Clock;
