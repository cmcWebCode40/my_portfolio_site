/*eslint-disable*/
import React, { Component } from 'react';

import styled from 'styled-components';

const moment = require('moment');

moment().format();

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.getTimeUntil(this.props.deadline);
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leadingZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  render() {
    // console.log(this.state);
    return (
      <ClockWrapper>
        <div className="clock">
          <div>
            {this.leadingZero(this.state.days)}
            {' '}
            <div className="time-name">days</div>
          </div>
          <div>
            {this.leadingZero(this.state.hours)}
            {' '}
            <div className="time-name">hours</div>
          </div>
          <div>
            {this.leadingZero(this.state.minutes)}
            {' '}
            <div className="time-name">minutes</div>
          </div>
          <div>
            {this.leadingZero(this.state.seconds)}
            {' '}
            <div className="time-name">seconds</div>
          </div>
        </div>
      </ClockWrapper>
    );
  }
}

const ClockWrapper = styled.div`
  .clock {
    display: flex;
  }

  .clock div {
    margin-top: 20px;
    margin-bottom: -10px;
    margin-right: 30px;
    color: var(--primary-color);
    font-size: 30px;
    font-weight: 700;
  }

  .time-name {
    font-size: 12px !important;
    margin: -10px 0 !important;
  }
`;
export default Clock;
