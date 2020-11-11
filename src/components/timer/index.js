import React, { Component } from "react";
import Clock from "./Clock";
import styled from "styled-components";
import moment from "moment";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "November 30, 2020",
      newDeadline: ""
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  handleClick() {
    this.changeDeadline();
  }

  render() {
    return (
      <TimeWrapper className="App">
        <Clock deadline={this.state.deadline} />
      </TimeWrapper>
    );
  }
}

const TimeWrapper = styled.section`
`;

export default Timer;
