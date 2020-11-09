import React, { Component } from 'react';
// import "./Timer.module.css";
import styled from 'styled-components';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.countDownId = null;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    };
  }

  componentDidMount() {
    this.countDownId = setInterval(this.timerInit, 1000);
  }

  componentWillUnmount() {
    if (this.countDownId) {
      clearInterval(this.countDownId);
    }
  }

  timerInit = () => {
    const { startDate } = this.props;
    console.log(startDate);
    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ expired: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // For countdown is finished
    if (distance < 0) {
      clearInterval(this.countDownId);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      });
      return;
    }
    this.setState({ days, hours, minutes, seconds, expired: false });
  };

  render() {
    const { days, hours, minutes, seconds, expired } = this.state;
    if (expired) {
      return <div className="expired">Get Started</div>;
    }
    return (
      <StyledDiv>
        <div className="timer">
          <div>
            {days}
            <div>days</div>
          </div>
          <div>
            {hours}
            <div>hours</div>
          </div>
          <div>
            {minutes}
            <div>minutes</div>
          </div>
          <div>
            {seconds}
            <div>seconds</div>
          </div>
        </div>
      </StyledDiv>
    );
  }
}
export default Timer;

const StyledDiv = styled.div`
.timer {
  display: flex;
  font-size: 12px;
  justify-content: center;
}
.timer > div {
  padding: 10px;
  // background: #444;
  color: var(--primary-color);
  font-size: 12px;
  margin-right: 2px;
  width: 100px;
  display: flex;
  justify-content: center;
}
.timer > div > span {
  text-transform: uppercase;
  color: #999;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.expired {
  font-size: 20px;
  color: rgb(126, 49, 49);
  border: 1px solid rgb(126, 49, 49);
  padding: 20px;
}
`
